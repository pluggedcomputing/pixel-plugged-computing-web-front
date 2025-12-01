import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelsExample } from './pixels-example';

describe('PixelsExample', () => {
  let component: PixelsExample;
  let fixture: ComponentFixture<PixelsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixelsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
