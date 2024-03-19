import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenElevenLevelOneComponent } from './screen-eleven-level-one.component';

describe('ScreenElevenLevelOneComponent', () => {
  let component: ScreenElevenLevelOneComponent;
  let fixture: ComponentFixture<ScreenElevenLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenElevenLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenElevenLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
