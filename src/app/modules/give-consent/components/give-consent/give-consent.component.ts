import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GiveConsentService } from '../../services/give-consent.service';
import { Consent } from '../../../shared/models/consent';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiveConsentComponent {
  constructor(
    private giveConsentService: GiveConsentService
  ) {
  }

  submit(consent: Consent) {
    this.giveConsentService.giveConsent(consent);
  }

}
