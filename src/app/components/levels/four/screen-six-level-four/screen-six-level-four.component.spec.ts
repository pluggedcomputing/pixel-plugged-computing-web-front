import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSixLevelFourComponent } from './screen-six-level-four.component';

describe('ScreenSixLevelFourComponent', () => {
  let component: ScreenSixLevelFourComponent;
  let fixture: ComponentFixture<ScreenSixLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSixLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenSixLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
