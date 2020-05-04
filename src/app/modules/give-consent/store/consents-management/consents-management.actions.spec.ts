import * as fromConsentsManagement from './consents-management.actions';
import { Consent } from '../../../shared/models/consent';

describe('consentsManagement', () => {
  it('create consent', () => {
    const inputData: Consent = { receiveNewsletter: true };
    const data = fromConsentsManagement.createConsent({ payload: inputData });
    expect(data.type).toBe('[CreateConsent] create consent');
    expect(data.payload).toBe(inputData);
  });

  it('create consent error', () => {
    const data = fromConsentsManagement.createConsentFail({ payload: 'Error' });
    expect(data.type).toBe('[CreateConsent] create consent fail');
    expect(data.payload).toBe('Error');
  });
});
