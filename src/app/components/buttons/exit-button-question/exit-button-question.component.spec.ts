import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitButtonQuestionComponent } from './exit-button-question.component';

describe('ExitButtonQuestionComponent', () => {
  let component: ExitButtonQuestionComponent;
  let fixture: ComponentFixture<ExitButtonQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitButtonQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitButtonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
