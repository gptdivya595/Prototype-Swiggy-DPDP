import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import Button from '../components/Button';
import ProgressDots from '../components/ProgressDots';

export default function GuardianConsent() {
  const nav = useNavigate();
  const { lang } = useConsent();
  const [stage, setStage] = useState<'ask' | 'sent' | 'ok'>('ask');

  return (
    <div className="screen">
      <ProgressDots step={3} total={5} />
      <div className="spacer" />
      <span className="saral-tag">Pillar 5 · Guardian consent</span>
      <div className="spacer-sm" />
      <h1 className="title">{tr('guardian_title', lang)}</h1>
      <div className="spacer-sm" />
      <p className="sub">{tr('guardian_sub', lang)}</p>
      <div className="spacer" />

      <div className="card">
        <div className="data-row">
          <span className="ic">👪</span>
          <div className="txt">
            <div className="h">{lang === 'en' ? "Parent's mobile" : 'माता-पिता का मोबाइल'}</div>
            <div className="p">+91 90000 00000</div>
          </div>
          <span className="pill pill-ess">{stage === 'ok' ? '✓' : '…'}</span>
        </div>
      </div>

      <div className="spacer" />
      <div className="notice notice-info">
        <span className="ic">🧒</span>
        <span className="t">{tr('child_mode', lang)}</span>
      </div>

      <div className="grow" />
      {stage === 'ask' && (
        <Button onClick={() => setStage('sent')}>{tr('guardian_send', lang)}</Button>
      )}
      {stage === 'sent' && (
        <Button variant="ghost" onClick={() => setStage('ok')}>
          {tr('guardian_otp', lang)}
        </Button>
      )}
      {stage === 'ok' && <Button onClick={() => nav('/home')}>{tr('guardian_done', lang)}</Button>}
      <div className="dpdp-ref center" style={{ marginTop: 10 }}>
        DPDP S.9 — no marketing / tracking for children
      </div>
    </div>
  );
}
