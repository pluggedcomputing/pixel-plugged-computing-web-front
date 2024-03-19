import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEightLevelThreeComponent } from './screen-eight-level-three.component';

describe('ScreenEightLevelThreeComponent', () => {
  let component: ScreenEightLevelThreeComponent;
  let fixture: ComponentFixture<ScreenEightLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenEightLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenEightLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
