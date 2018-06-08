import { TestBed, inject } from '@angular/core/testing';

import { DoyouAuthService } from './doyou-auth.service';

describe('DoyouAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoyouAuthService]
    });
  });

  it('should be created', inject([DoyouAuthService], (service: DoyouAuthService) => {
    expect(service).toBeTruthy();
  }));
});
