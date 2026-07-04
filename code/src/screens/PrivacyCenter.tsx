import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr, purposeLabel } from '../i18n';
import { OPTIONAL_PURPOSES, PURPOSE_META } from '../consent/types';
import ConsentToggle from '../components/ConsentToggle';

export default function PrivacyCenter() {
  const nav = useNavigate();
  const { lang, mode, hasConsent, grant, withdraw, isBlockedForChild } = useConsent();

  return (
    <div className="screen">
      <div className="appbar">
        <button className="back" onClick={() => nav('/home')}>
          ‹
        </button>
        <span className="h">{tr('pc_title', lang)}</span>
      </div>
      <p className="sub">{tr('pc_sub', lang)}</p>
      <div className="spacer" />

      <div className="section-label">{tr('pc_essential', lang)}</div>
      <div className="spacer-sm" />
      <div className="card">
        <div className="data-row">
          <span className="ic">{PURPOSE_META.essential_delivery.icon}</span>
          <div className="txt">
            <div className="h">{purposeLabel('essential_delivery', lang)}</div>
            <div className="p">{PURPOSE_META.essential_delivery.dpdp}</div>
          </div>
          <span className="pill pill-ess">{lang === 'en' ? 'On' : 'चालू'}</span>
        </div>
      </div>

      <div className="spacer" />
      <div className="section-label">{tr('pc_optional', lang)}</div>
      <div className="spacer-sm" />
      {OPTIONAL_PURPOSES.map((p) => (
        <ConsentToggle
          key={p}
          title={purposeLabel(p, lang)}
          desc={
            isBlockedForChild(p)
              ? lang === 'en'
                ? 'Locked off for child accounts (DPDP S.9)'
                : 'बाल खातों के लिए बंद (DPDP S.9)'
              : PURPOSE_META[p].dpdp
          }
          on={hasConsent(p)}
          disabled={mode === 'child'}
          onChange={(next) => (next ? grant(p) : withdraw(p))}
        />
      ))}

      <div className="grow" />
      <div className="spacer" />
      <button className="btn btn-ghost" onClick={() => nav('/ledger')}>
        🔏 {tr('view_ledger', lang)}
      </button>
      <div className="dpdp-ref center" style={{ marginTop: 10 }}>
        DPDP S.7 — withdrawing consent is as easy as giving it
      </div>
    </div>
  );
}
