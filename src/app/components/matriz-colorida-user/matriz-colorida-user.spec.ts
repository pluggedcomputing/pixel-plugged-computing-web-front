import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizColoridaUser } from './matriz-colorida-user';

describe('MatrizColoridaUser', () => {
  let component: MatrizColoridaUser;
  let fixture: ComponentFixture<MatrizColoridaUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizColoridaUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizColoridaUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
