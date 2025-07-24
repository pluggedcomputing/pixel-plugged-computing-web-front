import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationUser } from './identification-user';

describe('IdentificationUser', () => {
  let component: IdentificationUser;
  let fixture: ComponentFixture<IdentificationUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificationUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificationUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
