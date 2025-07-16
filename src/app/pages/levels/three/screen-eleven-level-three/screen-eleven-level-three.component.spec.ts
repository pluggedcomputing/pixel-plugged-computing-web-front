import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenElevenLevelThreeComponent } from './screen-eleven-level-three.component';

describe('ScreenElevenLevelThreeComponent', () => {
  let component: ScreenElevenLevelThreeComponent;
  let fixture: ComponentFixture<ScreenElevenLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenElevenLevelThreeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenElevenLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
