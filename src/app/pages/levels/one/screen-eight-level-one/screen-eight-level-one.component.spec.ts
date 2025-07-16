import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEightLevelOneComponent } from './screen-eight-level-one.component';

describe('ScreenEightLevelOneComponent', () => {
  let component: ScreenEightLevelOneComponent;
  let fixture: ComponentFixture<ScreenEightLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenEightLevelOneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenEightLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
