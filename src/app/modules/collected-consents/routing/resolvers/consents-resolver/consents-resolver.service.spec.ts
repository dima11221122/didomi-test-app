import { TestBed } from '@angular/core/testing';
import { ConsentsResolverService } from './consents-resolver.service';
import { CollectedConsentsService } from '../../../services/collected-consents/collected-consents.service';

describe('ConsentsResolverService', () => {
  let service: ConsentsResolverService;
  let collectedConsentsMock: {
    loadConsents: jasmine.Spy
  };
  beforeEach(() => {
    collectedConsentsMock = jasmine.createSpyObj(['loadConsents']);
    TestBed.configureTestingModule({
      providers: [
        { provide: CollectedConsentsService, useValue: collectedConsentsMock }
      ]
    });
    service = TestBed.inject(ConsentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#resolve', () => {
    service.resolve(null, null);
    expect(collectedConsentsMock.loadConsents).toHaveBeenCalled();
  });
});
