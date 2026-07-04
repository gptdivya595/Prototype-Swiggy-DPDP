import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import Button from '../components/Button';

export default function Done() {
  const nav = useNavigate();
  const { lang, events, reset } = useConsent();
  const grants = events.filter((e) => e.action === 'granted').length;
  const withdrawals = events.filter((e) => e.action === 'withdrawn').length;

  return (
    <div className="screen center">
      <div className="grow" style={{ display: 'grid', placeContent: 'center', justifyItems: 'center', gap: 12 }}>
        <div className="brand-mark" style={{ background: 'var(--green)' }}>
          ✓
        </div>
        <h1 className="title">{tr('done_title', lang)}</h1>
        <p className="sub" style={{ maxWidth: 280 }}>
          {tr('done_sub', lang)}
        </p>
        <div className="row" style={{ marginTop: 6 }}>
          <div className="card center" style={{ padding: '10px 16px' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--green)' }}>{grants}</div>
            <div className="tiny">{lang === 'en' ? 'consents given' : 'सहमतियाँ'}</div>
          </div>
          <div className="card center" style={{ padding: '10px 16px' }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--red)' }}>{withdrawals}</div>
            <div className="tiny">{lang === 'en' ? 'withdrawn' : 'वापस लीं'}</div>
          </div>
        </div>
      </div>
      <div className="stack-sm">
        <Button variant="ghost" onClick={() => nav('/home')}>
          {tr('back_home', lang)}
        </Button>
        <Button variant="dark" onClick={() => { reset(); nav('/'); }}>
          {tr('restart', lang)}
        </Button>
      </div>
    </div>
  );
}
