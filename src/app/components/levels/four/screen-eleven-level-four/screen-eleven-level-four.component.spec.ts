import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenElevenLevelFourComponent } from './screen-eleven-level-four.component';

describe('ScreenElevenLevelFourComponent', () => {
  let component: ScreenElevenLevelFourComponent;
  let fixture: ComponentFixture<ScreenElevenLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenElevenLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenElevenLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
