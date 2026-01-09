import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeActivityComponent } from './qr-code-activity';

describe('QrCodeActivityComponent', () => {
  let component: QrCodeActivityComponent;
  let fixture: ComponentFixture<QrCodeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCodeActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
