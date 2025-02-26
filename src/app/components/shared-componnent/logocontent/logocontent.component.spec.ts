import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogocontentComponent } from './logocontent.component';

describe('LogocontentComponent', () => {
  let component: LogocontentComponent;
  let fixture: ComponentFixture<LogocontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogocontentComponent]
    });
    fixture = TestBed.createComponent(LogocontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
