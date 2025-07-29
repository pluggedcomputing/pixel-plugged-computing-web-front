import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSelectionLevel } from './footer-selection-level';

describe('FooterSelectionLevel', () => {
  let component: FooterSelectionLevel;
  let fixture: ComponentFixture<FooterSelectionLevel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSelectionLevel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSelectionLevel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
