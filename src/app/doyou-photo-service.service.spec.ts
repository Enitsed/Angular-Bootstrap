import { TestBed, inject } from '@angular/core/testing';

import { DoyouPhotoServiceService } from './doyou-photo-service.service';

describe('DoyouPhotoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoyouPhotoServiceService]
    });
  });

  it('should be created', inject([DoyouPhotoServiceService], (service: DoyouPhotoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
