import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSevenLevelOneComponent } from './screen-seven-level-one.component';

describe('ScreenSevenLevelOneComponent', () => {
  let component: ScreenSevenLevelOneComponent;
  let fixture: ComponentFixture<ScreenSevenLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSevenLevelOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenSevenLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
