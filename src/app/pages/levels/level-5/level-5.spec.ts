import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level5 } from './level-5';

describe('Level5', () => {
  let component: Level5;
  let fixture: ComponentFixture<Level5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
