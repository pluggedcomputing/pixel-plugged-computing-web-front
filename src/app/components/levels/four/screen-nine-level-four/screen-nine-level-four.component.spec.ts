import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNineLevelFourComponent } from './screen-nine-level-four.component';

describe('ScreenNineLevelFourComponent', () => {
  let component: ScreenNineLevelFourComponent;
  let fixture: ComponentFixture<ScreenNineLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNineLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenNineLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
