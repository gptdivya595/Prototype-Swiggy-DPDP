import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ConsentEvent, ConsentPurpose, Lang, Mode } from './types';
import { PURPOSE_META, OPTIONAL_PURPOSES } from './types';
import { loadLedger, saveLedger, clearLedger, makeEvent } from './ledger';

interface ConsentState {
  events: ConsentEvent[];
  lang: Lang;
  mode: Mode;
  setLang: (l: Lang) => void;
  setMode: (m: Mode) => void;
  grant: (p: ConsentPurpose) => void;
  withdraw: (p: ConsentPurpose) => void;
  notice: (p: ConsentPurpose) => void;
  hasConsent: (p: ConsentPurpose) => boolean;
  isBlockedForChild: (p: ConsentPurpose) => boolean;
  reset: () => void;
}

const Ctx = createContext<ConsentState | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<ConsentEvent[]>(() => loadLedger());
  const [lang, setLang] = useState<Lang>('en');
  const [mode, setMode] = useState<Mode>('adult');

  useEffect(() => {
    saveLedger(events);
  }, [events]);

  const append = (p: ConsentPurpose, action: 'granted' | 'withdrawn' | 'noticed') =>
    setEvents((prev) => [...prev, makeEvent(p, action, lang)]);

  // Latest action per purpose determines current state (append-only, never mutate).
  const latest = useMemo(() => {
    const m = new Map<ConsentPurpose, ConsentEvent>();
    for (const e of events) {
      if (e.action === 'noticed') continue;
      m.set(e.purpose, e);
    }
    return m;
  }, [events]);

  const isBlockedForChild = (p: ConsentPurpose) =>
    mode === 'child' && PURPOSE_META[p].category === 'optional';

  const grant = (p: ConsentPurpose) => {
    if (isBlockedForChild(p)) return; // data-minimal child accounts: optional purposes hard-blocked
    if (latest.get(p)?.action === 'granted') return;
    append(p, 'granted');
  };
  const withdraw = (p: ConsentPurpose) => {
    if (latest.get(p)?.action !== 'granted') return;
    append(p, 'withdrawn');
  };
  const notice = (p: ConsentPurpose) => append(p, 'noticed');

  const hasConsent = (p: ConsentPurpose) => latest.get(p)?.action === 'granted';

  const reset = () => {
    clearLedger();
    setEvents([]);
    setMode('adult');
  };

  const value: ConsentState = {
    events,
    lang,
    mode,
    setLang,
    setMode,
    grant,
    withdraw,
    notice,
    hasConsent,
    isBlockedForChild,
    reset,
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useConsent(): ConsentState {
  const c = useContext(Ctx);
  if (!c) throw new Error('useConsent must be used within ConsentProvider');
  return c;
}

export { OPTIONAL_PURPOSES };
