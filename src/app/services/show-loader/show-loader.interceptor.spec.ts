import { TestBed } from '@angular/core/testing';

import { ShowLoaderInterceptor } from './show-loader.interceptor';
import { UiService } from '../../modules/shared/services/ui/ui.service';
import { Subject } from 'rxjs';
import { HttpHandler } from '@angular/common/http';

describe('ShowLoaderInterceptor', () => {
  let uiServiceMock: {
    setLoading: jasmine.Spy
  };
  let interceptor: ShowLoaderInterceptor;
  beforeEach(() => {
    uiServiceMock = jasmine.createSpyObj(['setLoading']);
    TestBed.configureTestingModule({
      providers: [
        ShowLoaderInterceptor,
        { provide: UiService, useValue: uiServiceMock }
      ]
    });
    interceptor = TestBed.inject(ShowLoaderInterceptor);
  });

  it('should turn on and turn off loader correctly', () => {
    const nextObservable = new Subject();
    const nextHttpHandler = { handle: () => nextObservable };

    const subscription = interceptor.intercept(null, nextHttpHandler as any).subscribe();
    expect(uiServiceMock.setLoading).toHaveBeenCalledWith(true);
    subscription.unsubscribe();
    expect(uiServiceMock.setLoading).toHaveBeenCalledWith(false);
  });
});
