import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationUserComponent } from './identification-user';

describe('IdentificationUser', () => {
  let component: IdentificationUserComponent;
  let fixture: ComponentFixture<IdentificationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificationUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
