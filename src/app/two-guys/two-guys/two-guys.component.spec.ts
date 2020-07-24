import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoGuysComponent } from './two-guys.component';

describe('TwoGuysComponent', () => {
  let component: TwoGuysComponent;
  let fixture: ComponentFixture<TwoGuysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoGuysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoGuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
