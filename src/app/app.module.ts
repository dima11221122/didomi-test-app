import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainAreaComponent } from './components/main-area/main-area.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './routing/app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShowLoaderInterceptor } from './services/show-loader/show-loader.interceptor';
import { NgxMockServerModule } from 'ngx-mock-server';
import { GiveConsentMockModule } from './mock/give-consent-mock.module';

@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    MatListModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressBarModule,
    SharedModule,
    GiveConsentMockModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ShowLoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
