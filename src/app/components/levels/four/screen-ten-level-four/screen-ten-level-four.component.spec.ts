import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ScreenTenLevelFourComponent } from './screen-ten-level-four.component';

describe('ScreenTenLevelFourComponent', () => {
  let component: ScreenTenLevelFourComponent;
  let fixture: ComponentFixture<ScreenTenLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenTenLevelFourComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScreenTenLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a 5x5 grid with initial coordinates', () => {
    const expectedGrid = [
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0]
    ];
    expect(component.grid).toEqual(expectedGrid);
  });

  it('should toggle cell color', () => {
    component.selectColor(2); // Salmão
    component.toggleCell(0, 0);
    expect(component.grid[0][0]).toBe(2);
    component.toggleCell(0, 0);
    expect(component.grid[0][0]).toBe(2); // Should remain Salmão
  });

  it('should change selected color', () => {
    component.selectColor(3); // Verde Musgo
    expect(component.selectedColor).toBe(3);
  });
});
