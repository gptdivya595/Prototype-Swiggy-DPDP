import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr, purposeLabel } from '../i18n';
import type { ConsentAction } from '../consent/types';

const BADGE: Record<ConsentAction, { cls: string; en: string; hi: string }> = {
  granted: { cls: 'badge-g', en: 'Granted', hi: 'दी गई' },
  withdrawn: { cls: 'badge-w', en: 'Withdrawn', hi: 'वापस ली' },
  noticed: { cls: 'badge-n', en: 'Notice shown', hi: 'सूचना' },
};

export default function LedgerView() {
  const nav = useNavigate();
  const { lang, events } = useConsent();
  const ordered = [...events].reverse();

  return (
    <div className="screen">
      <div className="appbar">
        <button className="back" onClick={() => nav('/privacy')}>
          ‹
        </button>
        <span className="h">{tr('ledger_title', lang)}</span>
      </div>
      <p className="sub">{tr('ledger_sub', lang)}</p>
      <div className="spacer" />

      {ordered.length === 0 && <p className="tiny">{tr('ledger_empty', lang)}</p>}

      {ordered.map((e) => {
        const b = BADGE[e.action];
        return (
          <div key={e.id} className={`ledger-item ${e.action}`}>
            <div className="h">
              <span>{purposeLabel(e.purpose, lang)}</span>
              <span className={`badge ${b.cls}`}>{b[lang]}</span>
            </div>
            <div className="meta">
              {new Date(e.ts).toLocaleString()} · {e.category} · {e.lang} · {e.noticeVersion}
              <br />
              sig {e.artifactHash}
            </div>
          </div>
        );
      })}

      <div className="grow" />
      <div className="spacer" />
      <button className="btn btn-primary" onClick={() => nav('/done')}>
        {lang === 'en' ? 'Finish' : 'समाप्त'}
      </button>
      <div className="dpdp-ref center" style={{ marginTop: 10 }}>
        Pillar 4 — signed, append-only Consent Ledger (demo: in-browser)
      </div>
    </div>
  );
}
