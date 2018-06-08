import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouAboutStickerboardComponent } from './doyou-about-stickerboard.component';

describe('DoyouAboutStickerboardComponent', () => {
  let component: DoyouAboutStickerboardComponent;
  let fixture: ComponentFixture<DoyouAboutStickerboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouAboutStickerboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouAboutStickerboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
