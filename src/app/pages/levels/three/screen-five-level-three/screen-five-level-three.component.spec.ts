import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFiveLevelThreeComponent } from './screen-five-level-three.component';

describe('ScreenFiveLevelThreeComponent', () => {
  let component: ScreenFiveLevelThreeComponent;
  let fixture: ComponentFixture<ScreenFiveLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFiveLevelThreeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenFiveLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
