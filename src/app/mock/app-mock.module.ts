import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { json, NgxMockServerModule, RouteDeclaration } from 'ngx-mock-server';
import { Consent } from '../modules/shared/models/consent';
import { HttpRequest } from '@angular/common/http';
import * as faker from 'faker';

let consents: Consent[] = [...Array(4)].map((_, index) => ({
  id: index,
  name: faker.name.findName(),
  email: faker.internet.email(),
  receiveNewsletter: faker.random.boolean(),
  trackVisits: faker.random.boolean(),
  targetedAds: faker.random.boolean()
}));

let id = consents.length;

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
