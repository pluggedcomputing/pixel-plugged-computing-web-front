import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTenLevelOneComponent } from './screen-ten-level-one.component';

describe('ScreenTenLevelOneComponent', () => {
  let component: ScreenTenLevelOneComponent;
  let fixture: ComponentFixture<ScreenTenLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTenLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTenLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
