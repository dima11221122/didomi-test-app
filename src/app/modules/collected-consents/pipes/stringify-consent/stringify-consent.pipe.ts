import { Pipe, PipeTransform } from '@angular/core';
import { Consent } from '../../../shared/models/consent';

/**
 * Show text representation of selected consents
 */
@Pipe({
  name: 'stringifyConsent'
})
export class StringifyConsentPipe implements PipeTransform {

  transform(value: Consent, ...args: unknown[]): unknown {
    const consents: string[] = [];
    if (value.receiveNewsletter) {
      consents.push('Receive newsletter');
    }

    if (value.targetedAds) {
      consents.push('Be shown targeted ads');
    }

    if (value.trackVisits) {
      consents.push('Contribute to anonymous visit statistic');
    }

    return consents.join(', ');
  }

}
