import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEightLevelFourComponent } from './screen-eight-level-four.component';

describe('ScreenEightLevelFourComponent', () => {
  let component: ScreenEightLevelFourComponent;
  let fixture: ComponentFixture<ScreenEightLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenEightLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenEightLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
