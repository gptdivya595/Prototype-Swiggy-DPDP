import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import Button from '../components/Button';

export default function Splash() {
  const nav = useNavigate();
  const { lang, reset } = useConsent();
  return (
    <div className="screen center">
      <div className="grow" style={{ display: 'grid', placeContent: 'center', justifyItems: 'center', gap: 14 }}>
        <div className="brand-mark">S</div>
        <h1 className="title" style={{ marginTop: 6 }}>
          {tr('start', lang)} <span style={{ color: 'var(--orange)' }}>Swiggy</span>
        </h1>
        <p className="sub" style={{ maxWidth: 260 }}>
          {tr('start_sub', lang)}
        </p>
        <span className="saral-tag">🔏 {tr('saral', lang)}</span>
      </div>
      <div className="stack-sm">
        <Button onClick={() => { reset(); nav('/phone'); }}>{tr('get_started', lang)}</Button>
        <div className="dpdp-ref">Aligned with India's DPDP Act 2023</div>
      </div>
    </div>
  );
}
