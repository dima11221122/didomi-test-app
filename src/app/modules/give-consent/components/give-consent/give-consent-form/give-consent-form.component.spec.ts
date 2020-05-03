import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GiveConsentFormComponent } from './give-consent-form.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('GiveConsentFormComponent', () => {
  let component: GiveConsentFormComponent;
  let fixture: ComponentFixture<GiveConsentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveConsentFormComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatCheckboxModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('atLeastOnePermissionRequiredValidator', () => {
    let formGroupMock: {
      value: { receiveNewsletter: boolean, targetedAds: boolean, trackVisits: boolean }
    };
    beforeEach(() => {
      formGroupMock = {
        value: {
          receiveNewsletter: false,
          targetedAds: false,
          trackVisits: false
        }
      };
    });

    it('should return error initially', () => {
      expect(component.atLeastOnePermissionRequiredValidator()(formGroupMock as FormGroup)).toEqual({
        atLeastOnPermissionRequired: true
      });
    });
    for (let field of ['receiveNewsletter', 'targetedAds', 'trackVisits']) {
      it(`should return null if ${field} is selected`, () => {
        formGroupMock.value[field] = true;
        expect(component.atLeastOnePermissionRequiredValidator()(formGroupMock as FormGroup)).toBeNull()
      })
    }
  })

  const getSubmitButton = (): DebugElement => {
    return fixture.debugElement.query(By.css('button'));
  }

  describe('email field', () => {
    let emailElement: DebugElement;
    const invalidClass = 'ng-invalid';

    const getEmailElement = (): DebugElement => {
      return fixture.debugElement.query(By.css('mat-form-field input[formcontrolname="email"]'));
    }

    beforeEach(() => {
      emailElement = getEmailElement();
    })

    let clickAndBlur = () => {
      emailElement.triggerEventHandler('click', {button: 0});
      fixture.detectChanges();
      emailElement.triggerEventHandler('blur', null);
      fixture.detectChanges();
    }

    it('should be initially valid', () => {
      expect(getEmailElement().classes[invalidClass]).not.toBeTrue();
    })

    it('should be valid if email is empty', () => {
      clickAndBlur();
      const newEmailElement = getEmailElement();
      expect(newEmailElement.classes[invalidClass]).not.toBeTrue();
    })

    it('should be invalid if email is incorrect', () => {
      emailElement.nativeElement.value = 'mail';
      emailElement.nativeElement.dispatchEvent(new Event('input'));
      clickAndBlur();
      const newEmailElement = getEmailElement();
      expect(newEmailElement.classes[invalidClass]).toBeTrue();
    })
  });

  describe('checkboxes', () => {
    const checkboxes = [
      'receiveNewsletter',
      'targetedAds',
      'trackVisits'
    ];
    for (let checkboxName of checkboxes) {
      it(`form should be valid if ${checkboxName} is activated`, () => {
        expect(getSubmitButton().nativeElement.disabled).toBeTrue();
        const checkbox = fixture.debugElement.query(By.css(`mat-checkbox[formcontrolname="${checkboxName}"] input`));
        checkbox.triggerEventHandler('click', new Event('click'));
        fixture.detectChanges();
        expect(getSubmitButton().nativeElement.disabled).not.toBeTrue();
      })
    }
  })
});
