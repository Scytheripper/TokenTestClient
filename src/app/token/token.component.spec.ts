import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenComponent } from './token.component';
import { TokenService } from '../services/token.service';
import { of } from 'rxjs/internal/observable/of';

class MockTokenService {
  getTokenFromApi(){
    return of(
      {
        data: {
          webToken : "THISISAWEBTOKEN"
        }
      }
    );
  }
}

describe('TokenComponent', () => {
  let component: TokenComponent;
  let fixture: ComponentFixture<TokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenComponent ],
      providers: [
        {provide: TokenService, useClass: MockTokenService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate with a token', () => {
    expect(component.token['data']['webToken']).toBe('THISISAWEBTOKEN');
  });
});
