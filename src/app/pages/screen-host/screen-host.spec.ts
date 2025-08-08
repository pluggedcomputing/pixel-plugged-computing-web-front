import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHost } from './screen-host';

describe('ScreenHost', () => {
  let component: ScreenHost;
  let fixture: ComponentFixture<ScreenHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
