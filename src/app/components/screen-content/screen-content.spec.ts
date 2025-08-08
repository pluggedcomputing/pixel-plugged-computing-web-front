import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContent } from './screen-content';

describe('ScreenContent', () => {
  let component: ScreenContent;
  let fixture: ComponentFixture<ScreenContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
