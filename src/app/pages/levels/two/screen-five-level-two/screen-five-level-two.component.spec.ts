import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenFiveLevelTwoComponent } from './screen-five-level-two.component';


describe('ScreenFiveLevelTwoComponent', () => {
  let component: ScreenFiveLevelTwoComponent;
  let fixture: ComponentFixture<ScreenFiveLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFiveLevelTwoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenFiveLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
