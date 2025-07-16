import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenSixLevelThreeComponent } from './screen-six-level-three.component';


describe('ScreenSixLevelThreeComponent', () => {
  let component: ScreenSixLevelThreeComponent;
  let fixture: ComponentFixture<ScreenSixLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSixLevelThreeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenSixLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
