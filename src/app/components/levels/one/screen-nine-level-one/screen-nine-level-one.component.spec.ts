import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNineLevelOneComponent } from './screen-nine-level-one.component';

describe('ScreenNineLevelOneComponent', () => {
  let component: ScreenNineLevelOneComponent;
  let fixture: ComponentFixture<ScreenNineLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNineLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenNineLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
