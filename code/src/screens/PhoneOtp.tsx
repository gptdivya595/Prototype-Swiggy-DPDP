import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import Button from '../components/Button';
import ProgressDots from '../components/ProgressDots';

export default function PhoneOtp() {
  const nav = useNavigate();
  const { lang } = useConsent();
  const [stage, setStage] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const phoneOk = phone.replace(/\D/g, '').length === 10;
  const otpOk = otp.replace(/\D/g, '').length === 4;

  return (
    <div className="screen">
      <ProgressDots step={0} total={5} />
      <div className="spacer" />
      {stage === 'phone' ? (
        <>
          <h1 className="title">{tr('phone_title', lang)}</h1>
          <div className="spacer-sm" />
          <p className="sub">{tr('phone_sub', lang)}</p>
          <div className="spacer" />
          <div className="field">
            <label>Mobile number</label>
            <input
              className="input"
              inputMode="numeric"
              placeholder="98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="notice notice-essential">
            <span className="ic">🔒</span>
            <span className="t">{tr('phone_notice', lang)}</span>
          </div>
          <div className="grow" />
          <Button disabled={!phoneOk} onClick={() => setStage('otp')}>
            {tr('send_code', lang)}
          </Button>
        </>
      ) : (
        <>
          <h1 className="title">{tr('otp_title', lang)}</h1>
          <div className="spacer-sm" />
          <p className="sub">
            {tr('otp_sub', lang)} · +91 {phone}
          </p>
          <div className="spacer" />
          <div className="field">
            <label>4-digit code</label>
            <input
              className="input"
              inputMode="numeric"
              maxLength={4}
              placeholder="••••"
              style={{ textAlign: 'center', fontSize: 22, letterSpacing: 8 }}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="grow" />
          <Button disabled={!otpOk} onClick={() => nav('/essentials')}>
            {tr('verify', lang)}
          </Button>
        </>
      )}
    </div>
  );
}
