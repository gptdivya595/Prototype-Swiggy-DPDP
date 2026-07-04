import type { ConsentEvent, ConsentPurpose, ConsentAction, Category, Lang } from './types';
import { PURPOSE_META } from './types';

export const NOTICE_VERSION = 'saral-v1';

/**
 * Deterministic non-cryptographic stub hash. In production this is replaced by a
 * cryptographically signed artifact written to append-only WORM storage
 * (see ../../../docs/Solutioning.md — Pillar 4, the Consent Ledger).
 */
export function artifactHash(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return '0x' + (h >>> 0).toString(16).padStart(8, '0');
}

export function makeEvent(
  purpose: ConsentPurpose,
  action: ConsentAction,
  lang: Lang,
): ConsentEvent {
  const ts = new Date().toISOString();
  const category: Category = PURPOSE_META[purpose].category;
  const id = `${purpose}:${action}:${ts}:${Math.random().toString(36).slice(2, 7)}`;
  return {
    id,
    purpose,
    action,
    category,
    lang,
    noticeVersion: NOTICE_VERSION,
    ts,
    artifactHash: artifactHash(`${purpose}|${action}|${ts}|${NOTICE_VERSION}`),
  };
}

const KEY = 'saral.ledger.v1';

export function loadLedger(): ConsentEvent[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ConsentEvent[]) : [];
  } catch {
    return [];
  }
}

export function saveLedger(events: ConsentEvent[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(events));
  } catch {
    /* ignore quota / private-mode errors in demo */
  }
}

export function clearLedger(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
