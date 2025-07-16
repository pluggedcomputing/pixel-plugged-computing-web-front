import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSevenLevelFourComponent } from './screen-seven-level-four.component';

describe('ScreenSevenLevelFourComponent', () => {
  let component: ScreenSevenLevelFourComponent;
  let fixture: ComponentFixture<ScreenSevenLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSevenLevelFourComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenSevenLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
