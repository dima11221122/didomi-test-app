import { StringifyConsentPipe } from './stringify-consent.pipe';
import { Consent } from '../../../shared/models/consent';

describe('StringifyConsentPipe', () => {
  let consent: Consent;
  let pipe: StringifyConsentPipe;
  beforeEach(() => {
    pipe = new StringifyConsentPipe();
    consent = {};
  });

  describe('one consent selected', () => {
    const consents = [
      { field: 'receiveNewsletter', text: 'Receive newsletter' },
      { field: 'targetedAds', text: 'Be shown targeted ads' },
      { field: 'trackVisits', text: 'Contribute to anonymous visit statistic' },
    ];

    for (const { field, text } of consents) {
      it(`get ${text} if ${field} is selected`, () => {
        consent[field] = true;
        expect(pipe.transform(consent)).toEqual(text);
      });
    }
  });

  it('two selected consents', () => {
    consent.trackVisits = true;
    consent.receiveNewsletter = true;
    expect(pipe.transform(consent)).toEqual('Receive newsletter, Contribute to anonymous visit statistic');
  });

  it('three selected consents', () => {
    consent.receiveNewsletter = true;
    consent.trackVisits = true;
    consent.targetedAds = true;
    expect(pipe.transform(consent)).toEqual('Receive newsletter, Be shown targeted ads, Contribute to anonymous visit statistic');
  });
});
