import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitButtonBlueComponent } from './exit-button-blue';

describe('ExitButtonBlue', () => {
  let component: ExitButtonBlueComponent;
  let fixture: ComponentFixture<ExitButtonBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitButtonBlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitButtonBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
