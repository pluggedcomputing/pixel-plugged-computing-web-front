import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSixLevelTwoComponent } from './screen-six-level-two.component';

describe('ScreenSixLevelTwoComponent', () => {
  let component: ScreenSixLevelTwoComponent;
  let fixture: ComponentFixture<ScreenSixLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSixLevelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenSixLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
