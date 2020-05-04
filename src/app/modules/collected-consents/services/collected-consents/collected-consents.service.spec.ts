import { TestBed } from '@angular/core/testing';

import { CollectedConsentsService } from './collected-consents.service';
import { Store } from '@ngrx/store';
import { loadConsents } from '../../store/consents/consents.actions';

describe('CollectedConsentsService', () => {
  let service: CollectedConsentsService;
  let storeMock: {
    dispatch: jasmine.Spy,
    select: jasmine.Spy
  };

  beforeEach(() => {
    storeMock = jasmine.createSpyObj(['dispatch', 'select']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock }
      ]
    });
    service = TestBed.inject(CollectedConsentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadConsents', () => {
    it('should dispatch loadConsents action', () => {
      service.loadConsents();
      expect(storeMock.dispatch).toHaveBeenCalledWith(loadConsents());
    });
  });
});
