import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenNineLevelThreeComponent } from './screen-nine-level-three.component';


describe('ScreenNineLevelThreeComponent', () => {
  let component: ScreenNineLevelThreeComponent;
  let fixture: ComponentFixture<ScreenNineLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNineLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenNineLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
