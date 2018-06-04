import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoyouAboutComponent } from './doyou-about.component';

describe('DoyouAboutComponent', () => {
  let component: DoyouAboutComponent;
  let fixture: ComponentFixture<DoyouAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoyouAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoyouAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
