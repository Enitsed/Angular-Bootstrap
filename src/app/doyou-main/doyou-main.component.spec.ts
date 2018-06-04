import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouMainComponent } from './doyou-main.component';

describe('DoyouMainComponent', () => {
  let component: DoyouMainComponent;
  let fixture: ComponentFixture<DoyouMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
