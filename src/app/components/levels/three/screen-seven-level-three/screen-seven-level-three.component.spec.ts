import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenSevenLevelThreeComponent } from './screen-seven-level-three.component';


describe('ScreenSevenLevelThreeComponent', () => {
  let component: ScreenSevenLevelThreeComponent;
  let fixture: ComponentFixture<ScreenSevenLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenSevenLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenSevenLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
