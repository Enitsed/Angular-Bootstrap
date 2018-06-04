import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouBoardComponent } from './doyou-board.component';

describe('DoyouBoardComponent', () => {
  let component: DoyouBoardComponent;
  let fixture: ComponentFixture<DoyouBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
