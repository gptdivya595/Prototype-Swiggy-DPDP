import type { Lang, ConsentPurpose } from './consent/types';

/** Plain-language (8th-grade) copy dictionary — SARAL Pillar 3. EN + HI shown; 10 more in production. */
type Dict = Record<string, { en: string; hi: string }>;

export const T: Dict = {
  start: { en: 'Order in', hi: 'ऑर्डर करें' },
  start_sub: {
    en: 'Food & groceries, delivered. Your data, on your terms.',
    hi: 'खाना और किराना, आपके पास। आपका डेटा, आपकी शर्तों पर।',
  },
  get_started: { en: 'Get started', hi: 'शुरू करें' },
  saral: { en: 'DPDP-ready consent', hi: 'DPDP-तैयार सहमति' },

  phone_title: { en: 'Enter your phone number', hi: 'अपना फ़ोन नंबर डालें' },
  phone_sub: { en: 'We send a one-time code to verify it.', hi: 'हम इसे सत्यापित करने के लिए एक कोड भेजते हैं।' },
  phone_notice: {
    en: 'Your number is used only to sign you in and coordinate delivery. Not for ads.',
    hi: 'आपका नंबर केवल साइन-इन और डिलीवरी के लिए है। विज्ञापनों के लिए नहीं।',
  },
  send_code: { en: 'Send code', hi: 'कोड भेजें' },
  otp_title: { en: 'Enter the code', hi: 'कोड डालें' },
  otp_sub: { en: 'Demo: type any 4 digits.', hi: 'डेमो: कोई भी 4 अंक डालें।' },
  verify: { en: 'Verify', hi: 'सत्यापित करें' },

  ess_title: { en: 'What we need to deliver', hi: 'डिलीवरी के लिए ज़रूरी' },
  ess_sub: {
    en: 'These are essential to your order. We collect only these — nothing extra is switched on.',
    hi: 'ये आपके ऑर्डर के लिए ज़रूरी हैं। हम केवल यही लेते हैं — और कुछ नहीं।',
  },
  ess_notice: {
    en: 'Essential data has no opt-out because your order cannot happen without it. Everything optional is OFF by default and asked later, only when needed.',
    hi: 'ज़रूरी डेटा का ऑप्ट-आउट नहीं होता क्योंकि इसके बिना ऑर्डर संभव नहीं। बाकी सब वैकल्पिक है और डिफ़ॉल्ट रूप से बंद है।',
  },
  ess_continue: { en: 'Agree & continue', hi: 'सहमत हों और जारी रखें' },

  age_title: { en: 'One quick check', hi: 'एक छोटी जाँच' },
  age_sub: {
    en: 'The law gives extra protection to under-18 users. Tell us your age group.',
    hi: 'कानून 18 से कम उम्र वालों को अतिरिक्त सुरक्षा देता है। अपना आयु वर्ग बताएँ।',
  },
  age_adult: { en: 'I am 18 or older', hi: 'मैं 18 या अधिक का/की हूँ' },
  age_child: { en: 'I am under 18', hi: 'मैं 18 से कम का/की हूँ' },

  guardian_title: { en: 'Parent approval needed', hi: 'माता-पिता की मंज़ूरी चाहिए' },
  guardian_sub: {
    en: 'For under-18 users we need a verifiable parent/guardian approval before any account is created.',
    hi: '18 से कम उम्र के लिए खाता बनाने से पहले माता-पिता/अभिभावक की मंज़ूरी ज़रूरी है।',
  },
  guardian_send: { en: 'Send approval to parent', hi: 'माता-पिता को अनुरोध भेजें' },
  guardian_otp: { en: 'Parent entered their code', hi: 'माता-पिता ने कोड डाला' },
  guardian_done: { en: 'Approved · continue', hi: 'मंज़ूर · जारी रखें' },
  child_mode: {
    en: 'Child account: marketing, background location and third-party analytics stay OFF and cannot be turned on.',
    hi: 'बाल खाता: मार्केटिंग, बैकग्राउंड लोकेशन और थर्ड-पार्टी एनालिटिक्स बंद रहेंगे।',
  },

  home_greet: { en: 'Delivering to', hi: 'डिलीवरी यहाँ' },
  home_addr: { en: 'Home · Koramangala', hi: 'घर · कोरमंगला' },
  use_location: { en: 'Use my current location', hi: 'मेरी वर्तमान लोकेशन इस्तेमाल करें' },
  browse_instamart: { en: 'Open Instamart', hi: 'इंस्टामार्ट खोलें' },
  privacy_center: { en: 'Privacy Center', hi: 'प्राइवेसी सेंटर' },

  jit_loc_title: { en: 'Share your location?', hi: 'अपनी लोकेशन साझा करें?' },
  jit_loc_body: {
    en: 'We use it to auto-fill your address and show live delivery tracking. You can turn it off anytime.',
    hi: 'हम इसे पता भरने और लाइव ट्रैकिंग के लिए इस्तेमाल करते हैं। इसे कभी भी बंद कर सकते हैं।',
  },
  jit_mkt_title: { en: 'Get offers on WhatsApp?', hi: 'व्हाट्सएप पर ऑफ़र पाएँ?' },
  jit_mkt_body: {
    en: 'Turn on cross-service offers (Instamart, Dineout). Separate from your order data.',
    hi: 'क्रॉस-सर्विस ऑफ़र (इंस्टामार्ट, डाइनआउट) चालू करें। आपके ऑर्डर डेटा से अलग।',
  },
  jit_incentive: { en: '🎁 Get ₹50 off your next order when you turn this on', hi: '🎁 इसे चालू करने पर अगले ऑर्डर पर ₹50 की छूट' },
  allow: { en: 'Allow', hi: 'अनुमति दें' },
  not_now: { en: 'Not now', hi: 'अभी नहीं' },
  no_thanks: { en: 'No thanks', hi: 'नहीं चाहिए' },

  pc_title: { en: 'Privacy Center', hi: 'प्राइवेसी सेंटर' },
  pc_sub: { en: 'See and change what you share. Withdrawing is as easy as giving.', hi: 'आप क्या साझा करते हैं देखें और बदलें। वापस लेना उतना ही आसान।' },
  pc_essential: { en: 'Essential — always on', hi: 'ज़रूरी — हमेशा चालू' },
  pc_optional: { en: 'Optional — your choice', hi: 'वैकल्पिक — आपकी मर्ज़ी' },
  view_ledger: { en: 'View my consent ledger', hi: 'मेरा सहमति लेजर देखें' },

  ledger_title: { en: 'Consent Ledger', hi: 'सहमति लेजर' },
  ledger_sub: {
    en: 'Every consent action, signed and timestamped. Auditable by the Data Protection Board.',
    hi: 'हर सहमति क्रिया, हस्ताक्षरित और समयबद्ध। डेटा प्रोटेक्शन बोर्ड द्वारा जाँच योग्य।',
  },
  ledger_empty: { en: 'No consent events yet.', hi: 'अभी कोई सहमति घटना नहीं।' },

  done_title: { en: "You're all set", hi: 'सब तैयार है' },
  done_sub: {
    en: 'You saw exactly what Swiggy collects, chose the optional bits yourself, and can change them anytime. That is DPDP-valid consent.',
    hi: 'आपने देखा Swiggy क्या लेता है, वैकल्पिक चीज़ें खुद चुनीं, और कभी भी बदल सकते हैं। यही DPDP-मान्य सहमति है।',
  },
  restart: { en: 'Restart demo', hi: 'डेमो फिर से' },
  back_home: { en: 'Back to home', hi: 'होम पर वापस' },
};

export function tr(key: string, lang: Lang): string {
  const e = T[key];
  return e ? e[lang] : key;
}

export const PURPOSE_LABEL: Record<ConsentPurpose, { en: string; hi: string }> = {
  essential_delivery: { en: 'Delivery essentials (phone, address, payment)', hi: 'डिलीवरी ज़रूरी (फ़ोन, पता, भुगतान)' },
  location_bg: { en: 'Live & background location', hi: 'लाइव व बैकग्राउंड लोकेशन' },
  marketing_cross: { en: 'Cross-service marketing offers', hi: 'क्रॉस-सर्विस मार्केटिंग ऑफ़र' },
  analytics_3p: { en: 'Third-party analytics & ads', hi: 'थर्ड-पार्टी एनालिटिक्स व विज्ञापन' },
};

export function purposeLabel(p: ConsentPurpose, lang: Lang): string {
  return PURPOSE_LABEL[p][lang];
}
