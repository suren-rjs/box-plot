import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPlotComponent } from './box-plot.component';

describe('BoxPlotComponent', () => {
  let component: BoxPlotComponent;
  let fixture: ComponentFixture<BoxPlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxPlotComponent]
    });
    fixture = TestBed.createComponent(BoxPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
