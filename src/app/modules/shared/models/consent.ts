/**
 * Consent model
 */
export interface Consent {
  id?: number;
  name?: string;
  email?: string;
  receiveNewsletter?: boolean;
  targetedAds?: boolean;
  trackVisits?: boolean;
}
