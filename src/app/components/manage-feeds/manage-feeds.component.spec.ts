import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFeedsComponent } from './manage-feeds.component';

describe('ManageFeedsComponent', () => {
  let component: ManageFeedsComponent;
  let fixture: ComponentFixture<ManageFeedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFeedsComponent]
    });
    fixture = TestBed.createComponent(ManageFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
