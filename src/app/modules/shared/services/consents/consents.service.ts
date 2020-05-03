import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consent } from '../../models/consent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsentsService {
  static readonly CONSENTS_URL = '/consents';
  constructor(
    private httpClient: HttpClient
  ) { }

  createConsent(consent: Consent): Observable<Consent> {
    return this.httpClient.post<Consent>(ConsentsService.CONSENTS_URL, consent);
  }

  getConsents(): Observable<Consent[]> {
    return this.httpClient.get<Consent[]>(ConsentsService.CONSENTS_URL);
  }
}
