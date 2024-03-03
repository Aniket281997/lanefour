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

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken: string | null = localStorage.getItem('AUTH_TOKEN');
    
    // Check if the user is logged in (access token exists)
    if (accessToken) {
      const url = environment.API_BASE + request.url;

      // Include the Authorization header only if the user is logged in
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      });

      const modifiedRequest = request.clone({ headers: header, url });
      return next.handle(modifiedRequest);
    } else {
      // If the user is not logged in, proceed with the original request
      return next.handle(request);
    }
  }
}
