import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitButtonBlue } from './exit-button-blue';

describe('ExitButtonBlue', () => {
  let component: ExitButtonBlue;
  let fixture: ComponentFixture<ExitButtonBlue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitButtonBlue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitButtonBlue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
