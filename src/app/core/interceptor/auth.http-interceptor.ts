import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Environment } from 'src/environments/environments';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!Environment.ApiKey) throw Error('API key does Not entered');
    const clonedRequest = req.clone({
      headers: req.headers.append('X-CMC_PRO_API_KEY', Environment.ApiKey),
    });
    return next.handle(clonedRequest);
  }
}
