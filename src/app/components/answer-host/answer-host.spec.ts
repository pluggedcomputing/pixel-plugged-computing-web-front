import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerHostComponent } from './answer-host';

describe('AnswerHost', () => {
  let component: AnswerHostComponent;
  let fixture: ComponentFixture<AnswerHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
