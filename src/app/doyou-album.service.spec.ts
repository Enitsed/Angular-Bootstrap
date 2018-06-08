import { TestBed, inject } from '@angular/core/testing';

import { DoyouAlbumService } from './doyou-album.service';

describe('DoyouAlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoyouAlbumService]
    });
  });

  it('should be created', inject([DoyouAlbumService], (service: DoyouAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
