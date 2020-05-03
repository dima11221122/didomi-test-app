import * as fromCreateConsent from './create-consent.actions';
import { Consent } from '../../../shared/models/consent';

describe('createConsent', () => {
  it('create consent', () => {
    const inputData: Consent = { receiveNewsletter: true };
    const data = fromCreateConsent.createConsent({ payload: inputData });
    expect(data.type).toBe('[CreateConsent] create consent');
    expect(data.payload).toBe(inputData);
  });

  it('create consent error', () => {
    const data = fromCreateConsent.createConsentFail({ payload: 'Error' });
    expect(data.type).toBe('[CreateConsent] create consent fail');
    expect(data.payload).toBe('Error');
  });
});
