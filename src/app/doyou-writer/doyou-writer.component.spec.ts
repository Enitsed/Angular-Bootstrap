import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouWriterComponent } from './doyou-writer.component';

describe('DoyouWriterComponent', () => {
  let component: DoyouWriterComponent;
  let fixture: ComponentFixture<DoyouWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
