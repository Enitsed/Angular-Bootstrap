import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouAlbumComponent } from './doyou-album.component';

describe('DoyouAlbumComponent', () => {
  let component: DoyouAlbumComponent;
  let fixture: ComponentFixture<DoyouAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
