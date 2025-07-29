import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterButton } from './footer-button';

describe('FooterButton', () => {
  let component: FooterButton;
  let fixture: ComponentFixture<FooterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
