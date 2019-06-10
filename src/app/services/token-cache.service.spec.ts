import { TestBed } from '@angular/core/testing';

import { TokenCacheService } from './token-cache.service';

describe('TokenCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenCacheService = TestBed.get(TokenCacheService);
    expect(service).toBeTruthy();
  });
});
