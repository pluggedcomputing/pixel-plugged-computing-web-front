import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTwelveLevelOneComponent } from './screen-twelve-level-one.component';

describe('ScreenTwelveLevelOneComponent', () => {
  let component: ScreenTwelveLevelOneComponent;
  let fixture: ComponentFixture<ScreenTwelveLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenTwelveLevelOneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenTwelveLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
