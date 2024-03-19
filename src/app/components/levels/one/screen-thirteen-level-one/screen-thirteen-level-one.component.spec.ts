import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenThirteenLevelOneComponent } from './screen-thirteen-level-one.component';

describe('ScreenThirteenLevelOneComponent', () => {
  let component: ScreenThirteenLevelOneComponent;
  let fixture: ComponentFixture<ScreenThirteenLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenThirteenLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenThirteenLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
