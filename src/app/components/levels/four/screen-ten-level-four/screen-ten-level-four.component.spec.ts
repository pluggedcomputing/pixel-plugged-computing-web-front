import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTenLevelFourComponent } from './screen-ten-level-four.component';

describe('ScreenTenLevelFourComponent', () => {
  let component: ScreenTenLevelFourComponent;
  let fixture: ComponentFixture<ScreenTenLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTenLevelFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTenLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
