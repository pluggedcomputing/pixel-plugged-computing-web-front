import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnswerComponent } from './button-answer';

describe('ButtonAnswer', () => {
  let component: ButtonAnswerComponent;
  let fixture: ComponentFixture<ButtonAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
