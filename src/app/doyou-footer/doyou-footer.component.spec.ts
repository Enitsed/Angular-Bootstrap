import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouFooterComponent } from './doyou-footer.component';

describe('DoyouFooterComponent', () => {
  let component: DoyouFooterComponent;
  let fixture: ComponentFixture<DoyouFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
