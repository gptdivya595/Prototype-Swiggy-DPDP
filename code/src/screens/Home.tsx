import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConsent } from '../consent/ConsentContext';
import { tr } from '../i18n';
import JitSheet from '../components/JitSheet';

type Sheet = null | 'location' | 'marketing';

export default function Home() {
  const nav = useNavigate();
  const { lang, mode, grant, notice, hasConsent, isBlockedForChild } = useConsent();
  const [sheet, setSheet] = useState<Sheet>(null);
  const [locSet, setLocSet] = useState(false);

  const openLocation = () => {
    if (isBlockedForChild('location_bg')) return; // child: silently minimal
    notice('location_bg');
    setSheet('location');
  };
  const openMarketing = () => {
    if (isBlockedForChild('marketing_cross')) return;
    notice('marketing_cross');
    setSheet('marketing');
  };

  return (
    <>
      <div className="home-hd">
        <span style={{ fontSize: 20 }}>📍</span>
        <div className="addr">
          {tr('home_greet', lang)}
          <br />
          <b>{tr('home_addr', lang)}</b>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => nav('/privacy')}
            style={{ background: 'rgba(255,255,255,.2)' }}
          >
            🔏
          </button>
        </div>
      </div>

      <div className="screen" style={{ padding: '0 0 18px' }}>
        <div className="searchbar">🔍 {lang === 'en' ? 'Search for biryani, milk, paan…' : 'बिरयानी, दूध, पान खोजें…'}</div>

        <div className="tile-grid">
          <div className="tile" style={{ background: '#F97316' }} onClick={openLocation}>
            <div className="h">🍔 Food</div>
            <div className="p">{tr('use_location', lang)}</div>
          </div>
          <div className="tile" style={{ background: '#7C3AED' }} onClick={openMarketing}>
            <div className="h">🛒 Instamart</div>
            <div className="p">{tr('browse_instamart', lang)}</div>
          </div>
        </div>

        <div className="spacer" />
        <div style={{ padding: '0 18px' }} className="section-label">
          {lang === 'en' ? 'Popular near you' : 'आपके पास लोकप्रिय'}
        </div>
        <div className="spacer-sm" />
        {[
          { e: '🍛', n: { en: 'Meghana Foods', hi: 'मेघना फ़ूड्स' }, d: 'Biryani · 25 min' },
          { e: '🍕', n: { en: 'Pizza Bakery', hi: 'पिज़्ज़ा बेकरी' }, d: 'Italian · 30 min' },
          { e: '🥗', n: { en: 'FreshMenu', hi: 'फ्रेशमेन्यू' }, d: 'Healthy · 20 min' },
        ].map((r) => (
          <div className="rest-card" key={r.e}>
            <div className="thumb" style={{ background: 'var(--surface)' }}>{r.e}</div>
            <div className="txt">
              <div style={{ fontWeight: 700, fontSize: 14 }}>{r.n[lang]}</div>
              <div className="tiny">{r.d}</div>
            </div>
            <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 700 }}>★ 4.4</span>
          </div>
        ))}

        {mode === 'child' && (
          <>
            <div className="spacer" />
            <div style={{ padding: '0 18px' }}>
              <div className="notice notice-info">
                <span className="ic">🧒</span>
                <span className="t">{tr('child_mode', lang)}</span>
              </div>
            </div>
          </>
        )}

        <div className="spacer" />
        <div style={{ padding: '0 18px' }}>
          <button className="btn btn-ghost" onClick={() => nav('/privacy')}>
            🔏 {tr('privacy_center', lang)}
          </button>
        </div>
      </div>

      {sheet === 'location' && (
        <JitSheet
          icon="📍"
          title={tr('jit_loc_title', lang)}
          body={tr('jit_loc_body', lang)}
          dpdp="DPDP S.6 — specific consent, asked in context"
          allowLabel={tr('allow', lang)}
          denyLabel={tr('not_now', lang)}
          onAllow={() => {
            grant('location_bg');
            setLocSet(true);
            setSheet(null);
          }}
          onDeny={() => setSheet(null)}
        />
      )}
      {sheet === 'marketing' && (
        <JitSheet
          icon="🎁"
          title={tr('jit_mkt_title', lang)}
          body={tr('jit_mkt_body', lang)}
          incentive={tr('jit_incentive', lang)}
          dpdp="DPDP S.6 — affirmative, unbundled from delivery"
          allowLabel={tr('allow', lang)}
          denyLabel={tr('no_thanks', lang)}
          onAllow={() => {
            grant('marketing_cross');
            setSheet(null);
          }}
          onDeny={() => setSheet(null)}
        />
      )}
      {/* subtle confirmations */}
      {locSet && hasConsent('location_bg') && (
        <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, textAlign: 'center' }} className="tiny">
          ✓ {lang === 'en' ? 'Location on — tap 🔏 to change anytime' : 'लोकेशन चालू — बदलने के लिए 🔏'}
        </div>
      )}
    </>
  );
}
