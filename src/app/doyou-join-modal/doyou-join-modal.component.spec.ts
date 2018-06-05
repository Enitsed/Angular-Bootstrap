import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouJoinModalComponent } from './doyou-join-modal.component';

describe('DoyouJoinModalComponent', () => {
  let component: DoyouJoinModalComponent;
  let fixture: ComponentFixture<DoyouJoinModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouJoinModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouJoinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
