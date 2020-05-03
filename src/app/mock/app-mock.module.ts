import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { json, NgxMockServerModule, RouteDeclaration } from 'ngx-mock-server';
import { Consent } from '../modules/shared/models/consent';
import { HttpRequest } from '@angular/common/http';

let id = 4;

let consents: Consent[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'super@mail.com',
    receiveNewsletter: true
  },
  {
    id: 2,
    name: 'Foo bar',
    email: 'foo@bar.org',
    receiveNewsletter: true,
    trackVisits: true
  },
  {
    id: 3,
    receiveNewsletter: true
  }
];

export function createConsent(req?: HttpRequest<Consent>) {
  const data = { ...req.body, id: id++ };
  consents = [...consents, data];
  return json(200, data);
}

export function getConsents() {
  return json(200, consents);
}

const appMockRoutes: RouteDeclaration[] = [
  {
    path: '/consents',
    method: 'POST',
    callback: createConsent
  },
  {
    path: '/consents',
    method: 'GET',
    callback: getConsents
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMockServerModule.forRoot({ enabled: true, routes: appMockRoutes })
  ]
})
export class AppMockModule {
}
