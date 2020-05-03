import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UiService } from '../../modules/shared/services/ui/ui.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ShowLoaderInterceptor implements HttpInterceptor {

  constructor(
    private uiService: UiService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.uiService.setLoading(true);
    return next.handle(request).pipe(finalize(() => this.uiService.setLoading(false)));
  }
}
