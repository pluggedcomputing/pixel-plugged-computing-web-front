import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizColor } from './matriz-colorida-user';

describe('MatrizColoridaUser', () => {
  let component: MatrizColor;
  let fixture: ComponentFixture<MatrizColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizColor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
