import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { BehaviorSubject } from 'rxjs';
import { UiService } from '../../modules/shared/services/ui.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loadingServiceMock: {
    selectLoading$: BehaviorSubject<boolean>
  };

  beforeEach(async(() => {
    loadingServiceMock = { selectLoading$: new BehaviorSubject<boolean>(false) };
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      imports: [
        MatProgressBarModule
      ],
      providers: [
        { provide: UiService, useValue: loadingServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loading flag', () => {
    it('should be initially hidden', () => {
      const loadingBar = fixture.nativeElement.querySelector('mat-progress-bar');
      expect(loadingBar).toBeNull();
    });

    it('should be hidden if loading equals false', () => {
      loadingServiceMock.selectLoading$.next(false);
      fixture.detectChanges();
      const loadingBar = fixture.nativeElement.querySelector('mat-progress-bar');
      expect(loadingBar).toBeNull();
    })

    it('should be shown if loading equals true', () => {
      loadingServiceMock.selectLoading$.next(true);
      fixture.detectChanges();
      const loadingBar = fixture.nativeElement.querySelector('mat-progress-bar');
      expect(loadingBar).not.toBeNull();
    })
  })
});
