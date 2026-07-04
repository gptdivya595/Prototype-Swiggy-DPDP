export type ConsentPurpose =
  | 'essential_delivery' // phone, address, payment — inline, no opt-out
  | 'location_bg' // live/background location — optional, JIT
  | 'marketing_cross' // Instamart/Dineout marketing — optional, JIT
  | 'analytics_3p'; // third-party analytics/ads — optional, JIT

export type ConsentAction = 'granted' | 'withdrawn' | 'noticed';
export type Category = 'essential' | 'optional';
export type Lang = 'en' | 'hi';
export type Mode = 'adult' | 'child';

export interface ConsentEvent {
  id: string;
  purpose: ConsentPurpose;
  action: ConsentAction;
  category: Category;
  lang: Lang;
  noticeVersion: string;
  ts: string; // ISO
  artifactHash: string; // stub of a signed ledger artifact
}

export const PURPOSE_META: Record<
  ConsentPurpose,
  { category: Category; icon: string; dpdp: string }
> = {
  essential_delivery: { category: 'essential', icon: '📦', dpdp: 'S.5 purpose limitation' },
  location_bg: { category: 'optional', icon: '📍', dpdp: 'S.6 specific consent · S.4 minimisation' },
  marketing_cross: { category: 'optional', icon: '🎁', dpdp: 'S.6 affirmative opt-in' },
  analytics_3p: { category: 'optional', icon: '📊', dpdp: 'S.6 · third-party sharing' },
};

export const OPTIONAL_PURPOSES: ConsentPurpose[] = ['location_bg', 'marketing_cross', 'analytics_3p'];
