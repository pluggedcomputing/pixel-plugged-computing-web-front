import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMatriz } from './save-matriz';

describe('SaveMatriz', () => {
  let component: SaveMatriz;
  let fixture: ComponentFixture<SaveMatriz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveMatriz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveMatriz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
