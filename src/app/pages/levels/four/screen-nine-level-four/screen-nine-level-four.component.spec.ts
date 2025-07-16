import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ScreenNineLevelFourComponent } from './screen-nine-level-four.component';

describe('ScreenNineLevelFourComponent', () => {
  let component: ScreenNineLevelFourComponent;
  let fixture: ComponentFixture<ScreenNineLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenNineLevelFourComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenNineLevelFourComponent);
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

  it('should toggle cell color', () => {
    const initialColor = component.grid[0][0];
    component.toggleCell(0, 0);
    expect(component.grid[0][0]).toBe(!initialColor);
    component.toggleCell(0, 0);
    expect(component.grid[0][0]).toBe(initialColor);
  });
});
