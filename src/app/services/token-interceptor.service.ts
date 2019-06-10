import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http'
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TokenCacheService } from './token-cache.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private tokenCacheService: TokenCacheService) { }

  intercept(req, next) {
    const cachedResponse = this.tokenCacheService.get(req);

    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.tokenCacheService);
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
