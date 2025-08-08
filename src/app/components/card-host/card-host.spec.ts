import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHost } from './card-host';

describe('CardHost', () => {
  let component: CardHost;
  let fixture: ComponentFixture<CardHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
