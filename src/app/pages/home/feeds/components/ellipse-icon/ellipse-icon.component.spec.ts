import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipseIconComponent } from './ellipse-icon.component';

describe('EllipseIconComponent', () => {
  let component: EllipseIconComponent;
  let fixture: ComponentFixture<EllipseIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EllipseIconComponent]
    });
    fixture = TestBed.createComponent(EllipseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
