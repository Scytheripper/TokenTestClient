import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http'
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }

  intercept(req, next) {
    const cachedResponse = this.tokenService.cache.get(req);

    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.tokenService.cache);
  }

  sendRequest(req, next, cache) {
    return next.handle(req).pipe(
      tap( event => {
        if( event instanceof HttpResponse) {
          cache.put(req, event);
        } 
      })
    );
  }
}
