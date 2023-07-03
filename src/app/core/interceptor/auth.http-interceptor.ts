import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { APPLICATION_CONFIG } from '../tokens/tokens';
import { DigipayApplicationConfig } from '../tokens/application.config';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    @Inject(APPLICATION_CONFIG) private config: DigipayApplicationConfig
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.config.ApiKey) throw Error('API key does Not entered');
    const clonedRequest = req.clone({
      headers: req.headers.append('X-CMC_PRO_API_KEY', this.config.ApiKey),
    });
    return next.handle(clonedRequest);
  }
}
