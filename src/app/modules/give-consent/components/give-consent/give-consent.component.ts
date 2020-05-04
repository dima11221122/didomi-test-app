import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConsentsManagementService } from '../../services/consents-management.service';
import { Consent } from '../../../shared/models/consent';

/**
 * Main form for creating of consent entity
 */
@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiveConsentComponent {
  constructor(
    private giveConsentService: ConsentsManagementService
  ) {
  }

  submit(consent: Consent) {
    this.giveConsentService.giveConsent(consent);
  }

}
