import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFiveLevelFourComponent } from './screen-five-level-four.component';

describe('ScreenFiveLevelFourComponent', () => {
  let component: ScreenFiveLevelFourComponent;
  let fixture: ComponentFixture<ScreenFiveLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFiveLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFiveLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
