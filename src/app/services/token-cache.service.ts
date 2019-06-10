import { Injectable } from '@angular/core';
import { HttpResponse, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenCacheService {

  cache = new Map();

  constructor() { }

  get(req: HttpRequest<any>):HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);
    if(!cached){
      return undefined;
    }
    console.log(cached.res.body);
    return cached.res;
  }

  put(req: HttpRequest<any>, res: HttpResponse<any> ) {
    const url = req.url;
    const entry = { url, res };
    this.cache.set(url, entry);
  }
}
