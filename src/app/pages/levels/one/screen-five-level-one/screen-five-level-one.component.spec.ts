import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFiveLevelOneComponent } from './screen-five-level-one.component';

describe('ScreenFiveLevelOneComponent', () => {
  let component: ScreenFiveLevelOneComponent;
  let fixture: ComponentFixture<ScreenFiveLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFiveLevelOneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenFiveLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
