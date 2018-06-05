import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouNavbarComponent } from './doyou-navbar.component';

describe('DoyouNavbarComponent', () => {
  let component: DoyouNavbarComponent;
  let fixture: ComponentFixture<DoyouNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
