import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScreenTenLevelThreeComponent } from './screen-ten-level-three.component';


describe('ScreenTenLevelThreeComponent', () => {
  let component: ScreenTenLevelThreeComponent;
  let fixture: ComponentFixture<ScreenTenLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTenLevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenTenLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
