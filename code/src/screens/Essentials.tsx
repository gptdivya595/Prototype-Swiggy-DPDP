import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import Button from '../components/Button';
import ProgressDots from '../components/ProgressDots';

const ROWS = [
  { ic: '📞', h: { en: 'Phone number', hi: 'फ़ोन नंबर' }, p: { en: 'Sign-in & delivery coordination', hi: 'साइन-इन और डिलीवरी' } },
  { ic: '📍', h: { en: 'Delivery address', hi: 'डिलीवरी पता' }, p: { en: 'So the rider reaches you', hi: 'ताकि राइडर आप तक पहुँचे' } },
  { ic: '💳', h: { en: 'Payment token', hi: 'भुगतान टोकन' }, p: { en: 'To process the transaction', hi: 'लेन-देन के लिए' } },
];

export default function Essentials() {
  const nav = useNavigate();
  const { lang, notice } = useConsent();

  const onContinue = () => {
    notice('essential_delivery'); // record the inline essential notice was shown & accepted
    nav('/age');
  };

  return (
    <div className="screen">
      <ProgressDots step={1} total={5} />
      <div className="spacer" />
      <span className="saral-tag">Pillar 1 · Unbundled</span>
      <div className="spacer-sm" />
      <h1 className="title">{tr('ess_title', lang)}</h1>
      <div className="spacer-sm" />
      <p className="sub">{tr('ess_sub', lang)}</p>
      <div className="spacer" />

      <div className="card">
        {ROWS.map((r) => (
          <div className="data-row" key={r.ic}>
            <span className="ic">{r.ic}</span>
            <div className="txt">
              <div className="h">{r.h[lang]}</div>
              <div className="p">{r.p[lang]}</div>
            </div>
            <span className="pill pill-ess">{lang === 'en' ? 'Essential' : 'ज़रूरी'}</span>
          </div>
        ))}
      </div>

      <div className="spacer" />
      <div className="notice notice-essential">
        <span className="ic">✅</span>
        <span className="t">{tr('ess_notice', lang)}</span>
      </div>

      <div className="grow" />
      <div className="dpdp-ref center" style={{ marginBottom: 10 }}>
        DPDP S.5 — purpose limitation · S.6 — no bundling
      </div>
      <Button onClick={onContinue}>{tr('ess_continue', lang)}</Button>
    </div>
  );
}
