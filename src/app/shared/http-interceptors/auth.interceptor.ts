import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { ContaService } from 'src/app/conta/services/conta.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _contaService: ContaService) {
  }

  intercept(
      httpRequest: HttpRequest<any>,
      next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    const getApiTokenOnStorage$ = this._contaService.obterTokenUsuarioStorage();

    return getApiTokenOnStorage$
        .pipe(
            mergeMap((token) => {

              if (!token) {

                return next.handle(httpRequest);
              }

              // Clone the request and set the new header in one step.
              const authRequest = httpRequest.clone(
                  { setHeaders: { Authorization: `Bearer ${ token }` } });

              // send cloned request with header to the next handler.
              return next.handle(authRequest);
            }),
        );
  }
}
