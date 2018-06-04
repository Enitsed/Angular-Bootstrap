import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouHeaderComponent } from './doyou-header.component';

describe('DoyouHeaderComponent', () => {
  let component: DoyouHeaderComponent;
  let fixture: ComponentFixture<DoyouHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
