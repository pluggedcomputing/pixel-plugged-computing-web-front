import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level4Component } from './level-4';

describe('Level4', () => {
  let component: Level4Component;
  let fixture: ComponentFixture<Level4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
