import type { ReactNode } from 'react';
import { useConsent } from '../consent/ConsentContext';

export default function PhoneFrame({ children }: { children: ReactNode }) {
  const { lang, setLang } = useConsent();
  return (
    <div className="phone">
      <div className="statusbar">
        <span>9:41</span>
        <div className="lang-toggle" role="group" aria-label="language">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
            EN
          </button>
          <button className={lang === 'hi' ? 'on' : ''} onClick={() => setLang('hi')}>
            हिं
          </button>
        </div>
        <span>▮▮▮ 100%</span>
      </div>
      {children}
    </div>
  );
}
