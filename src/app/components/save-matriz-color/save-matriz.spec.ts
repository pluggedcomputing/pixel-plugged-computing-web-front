import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMatrizColor } from './save-matriz';

describe('SaveMatriz', () => {
  let component: SaveMatrizColor;
  let fixture: ComponentFixture<SaveMatrizColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveMatrizColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveMatrizColor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
