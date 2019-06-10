import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  cache: Map<any, any> = new Map();

  constructor(private http: HttpClient) { }

  getTokenFromApi() {
    //cache the response
    return this.http.get(`${environment.token_api}/token`);
  }
}
