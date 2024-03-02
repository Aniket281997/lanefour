import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor() {}
  accessToken: any = localStorage.getItem('AUTH_TOKEN');
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = environment.API_BASE + request.url;

    const header = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'Bearer ' + this.accessToken,
    });
    const requesturl = request.clone({ headers: header, url });
    return next.handle(requesturl);
  }
}
