import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consent } from '../../../../shared/models/consent';

/**
 * Dumb component the form of creating of consent entity
 */
@Component({
  selector: 'app-give-consent-form',
  templateUrl: './give-consent-form.component.html',
  styleUrls: ['./give-consent-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiveConsentFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Consent>()

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: null,
      email: [null, [Validators.email]],
      receiveNewsletter: null,
      targetedAds: null,
      trackVisits: null
    }, {
      validators: this.atLeastOnePermissionRequiredValidator()
    })
  }

  /**
   * Check if at least one consent is selected
   */
  atLeastOnePermissionRequiredValidator() {
    return (formGroup: FormGroup) => {
      const { receiveNewsletter, targetedAds, trackVisits } = formGroup.value;
      return (receiveNewsletter || targetedAds || trackVisits) ? null : {
        atLeastOnPermissionRequired: true
      }
    }
  }

  ngOnInit() {
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    this.submitted.emit(this.form.value);
  }

}
