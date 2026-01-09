import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSelectionLevelComponent } from './footer-selection-level';

describe('FooterSelectionLevel', () => {
  let component: FooterSelectionLevelComponent;
  let fixture: ComponentFixture<FooterSelectionLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSelectionLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSelectionLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
