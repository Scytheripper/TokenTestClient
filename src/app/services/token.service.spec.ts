import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

describe('TokenService', () => {
  let httpTestingController: HttpTestingController;
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the demo token', () => {
    service.getTokenFromApi().subscribe(data => {
      expect(data).toBe({
        data: {
          "webToken" : "THISISAWEBTOKEN"
        }
      });
    });

    const req = httpTestingController.expectOne(`${environment.token_api}/token`);
    expect(req.request.method).toBe('GET');

    req.flush(sampleToken);
  });
});

const sampleToken = {
  data: {
    "webToken" : "THISISAWEBTOKEN"
  }
}
