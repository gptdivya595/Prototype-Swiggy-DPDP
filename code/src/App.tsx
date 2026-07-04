import { Routes, Route } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import Splash from './screens/Splash';
import PhoneOtp from './screens/PhoneOtp';
import Essentials from './screens/Essentials';
import AgeGate from './screens/AgeGate';
import GuardianConsent from './screens/GuardianConsent';
import Home from './screens/Home';
import PrivacyCenter from './screens/PrivacyCenter';
import LedgerView from './screens/LedgerView';
import Done from './screens/Done';

export default function App() {
  return (
    <div className="stage">
      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/phone" element={<PhoneOtp />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/age" element={<AgeGate />} />
          <Route path="/guardian" element={<GuardianConsent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privacy" element={<PrivacyCenter />} />
          <Route path="/ledger" element={<LedgerView />} />
          <Route path="/done" element={<Done />} />
          <Route path="*" element={<Splash />} />
        </Routes>
      </PhoneFrame>

      <aside className="info-panel">
        <h3>Swiggy SARAL — DPDP consent prototype</h3>
        <p style={{ fontSize: 12.5, lineHeight: 1.5, marginBottom: 10 }}>
          Clickable happy-path demo of DPDP-valid onboarding consent. Each screen maps to a
          principle of India's DPDP Act 2023.
        </p>
        <ul className="pill-list">
          <li>📦 <b>Pillar 1</b> — unbundled: essential inline vs optional toggles</li>
          <li>⏱️ <b>Pillar 2</b> — just-in-time asks with value exchange</li>
          <li>🌐 <b>Pillar 3</b> — plain language, <code>EN / हिं</code> toggle above</li>
          <li>🔏 <b>Pillar 4</b> — signed Consent Ledger (audit view)</li>
          <li>🧒 <b>Pillar 5</b> — children's gateway → guardian consent</li>
        </ul>
        <p style={{ fontSize: 11, color: '#8a827a', marginTop: 12 }}>
          Prototype only: OTP is simulated, ledger lives in your browser. Full write-up in{' '}
          <code>docs/Solutioning.md</code>.
        </p>
      </aside>
    </div>
  );
}
