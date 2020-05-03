import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Consent } from '../../../../shared/models/consent';
import { Observable, of } from 'rxjs';
import { CollectedConsentsService } from '../../../services/collected-consents/collected-consents.service';

@Injectable({
  providedIn: 'root'
})
export class ConsentsResolverService implements Resolve<void>{

  constructor(
    private collectedConsentsService: CollectedConsentsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
    this.collectedConsentsService.loadConsents();
    return of(undefined);
  }
}
