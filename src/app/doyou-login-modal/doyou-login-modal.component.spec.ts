import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouLoginModalComponent } from './doyou-login-modal.component';

describe('DoyouLoginModalComponent', () => {
  let component: DoyouLoginModalComponent;
  let fixture: ComponentFixture<DoyouLoginModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouLoginModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
