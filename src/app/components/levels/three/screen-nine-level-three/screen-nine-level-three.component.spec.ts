import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ScreenNineLevelThreeComponent } from './screen-nine-level-three.component';

describe('ScreenNineLevelThreeComponent', () => {
  let component: ScreenNineLevelThreeComponent;
  let fixture: ComponentFixture<ScreenNineLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNineLevelThreeComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenNineLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a 5x5 grid with initial coordinates', () => {
    const expectedGrid = [
      [false, true, true, true, false],
      [false, true, true, true, false],
      [false, true, false, true, false],
      [false, false, true, false, false],
      [false, true, true, true, false]
    ];
    expect(component.grid).toEqual(expectedGrid);
  });

  it('should not allow cells to change color', () => {
    // Test if the toggleCell function does not change cell color
    const initialGrid = [...component.grid.map(row => [...row])];
    component.toggleCell(0, 0);
    expect(component.grid).toEqual(initialGrid);
  });
});
