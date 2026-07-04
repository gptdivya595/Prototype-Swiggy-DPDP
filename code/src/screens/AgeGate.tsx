import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import Button from '../components/Button';
import ProgressDots from '../components/ProgressDots';

export default function AgeGate() {
  const nav = useNavigate();
  const { lang, setMode, grant } = useConsent();

  const choose = (mode: 'adult' | 'child') => {
    setMode(mode);
    grant('essential_delivery'); // essential consent recorded once identity path is set
    nav(mode === 'adult' ? '/home' : '/guardian');
  };

  return (
    <div className="screen">
      <ProgressDots step={2} total={5} />
      <div className="spacer" />
      <span className="saral-tag">Pillar 5 · Children's gateway</span>
      <div className="spacer-sm" />
      <h1 className="title">{tr('age_title', lang)}</h1>
      <div className="spacer-sm" />
      <p className="sub">{tr('age_sub', lang)}</p>
      <div className="spacer-lg" />

      <div className="stack-sm">
        <Button variant="ghost" onClick={() => choose('adult')}>
          🧑 {tr('age_adult', lang)}
        </Button>
        <Button variant="ghost" onClick={() => choose('child')}>
          🧒 {tr('age_child', lang)}
        </Button>
      </div>

      <div className="grow" />
      <div className="dpdp-ref center">DPDP S.9 — verifiable parental consent for under-18</div>
    </div>
  );
}
