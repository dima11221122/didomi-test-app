import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainAreaComponent } from './main-area.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('MainAreaComponent', () => {
  let component: MainAreaComponent;
  let fixture: ComponentFixture<MainAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainAreaComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule.withRoutes([
          { path: 'give-consent', component: RouterOutlet },
          { path: 'consents', component: RouterOutlet },
        ]),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  describe('router links', () => {
    let routerNavigateSpy: jasmine.Spy;
    let router: Router;

    beforeEach(() => {
      router = TestBed.inject(Router);
      router.initialNavigation();
      fixture.detectChanges();
      routerNavigateSpy = spyOn(router, 'navigateByUrl');
    });

    const links = [
      { title: 'Give consent', link: '/give-consent' },
      { title: 'Collected consents', link: '/consents' },
    ] as const;

    for (const { link, title } of links) {
      it(`should navigate to give ${link} page if ${title} link is clicked`, () => {
        const linkElement = fixture.debugElement.query(By.css(`a[href="${link}"]`));
        linkElement.triggerEventHandler('click', { button: 0 });
        const linkObj = router.createUrlTree([link]);
        expect(routerNavigateSpy).toHaveBeenCalledWith(linkObj, { skipLocationChange: false, replaceUrl: false, state: undefined });
      });
    }
  });
});
