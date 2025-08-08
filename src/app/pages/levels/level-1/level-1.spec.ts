import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1 } from './level-1';

describe('Level1', () => {
  let component: Level1;
  let fixture: ComponentFixture<Level1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
