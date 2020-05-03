import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { json, NgxMockServerModule, RouteDeclaration } from 'ngx-mock-server';
import { Consent } from '../modules/shared/models/consent';
import { HttpRequest } from '@angular/common/http';

let id = 4;

const consents: Consent[] = [
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
  consents.push(data);
  return json(200, data);
}

const appMockRoutes: RouteDeclaration[] = [
  {
    path: '/consents',
    method: 'POST',
    callback: createConsent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMockServerModule.forRoot({ enabled: true, routes: appMockRoutes })
  ]
})
export class GiveConsentMockModule {
}
