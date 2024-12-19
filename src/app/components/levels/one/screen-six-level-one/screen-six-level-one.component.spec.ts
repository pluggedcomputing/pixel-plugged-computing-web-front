import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSixLevelOneComponent } from './screen-six-level-one.component';

describe('ScreenSixLevelOneComponent', () => {
  let component: ScreenSixLevelOneComponent;
  let fixture: ComponentFixture<ScreenSixLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSixLevelOneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenSixLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
