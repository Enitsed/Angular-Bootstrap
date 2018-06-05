import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouFindModalComponent } from './doyou-find-modal.component';

describe('DoyouFindModalComponent', () => {
  let component: DoyouFindModalComponent;
  let fixture: ComponentFixture<DoyouFindModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouFindModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouFindModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
