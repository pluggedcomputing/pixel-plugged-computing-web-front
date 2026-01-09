import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHostComponent } from './card-host';

describe('CardHost', () => {
  let component: CardHostComponent;
  let fixture: ComponentFixture<CardHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
