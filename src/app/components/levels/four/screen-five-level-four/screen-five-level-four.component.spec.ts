import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ScreenFiveLevelFourComponent } from './screen-five-level-four.component';

describe('ScreenFiveLevelFourComponent', () => {
  let component: ScreenFiveLevelFourComponent;
  let fixture: ComponentFixture<ScreenFiveLevelFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFiveLevelFourComponent ],
      imports: [ FormsModule ] // Include FormsModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenFiveLevelFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a 5x5 grid', () => {
    expect(component.grid.length).toBe(5);
    component.grid.forEach(row => {
      expect(row.length).toBe(5);
    });
  });

  it('should have correct initial row words', () => {
    const expectedWords = ["1,0,0,0,0", "1,0,1,1,0", "1,0,0,0,0", "1,0,1,1,1", "1,0,1,1,1"];
    expect(component.rowWords).toEqual(expectedWords);
  });

  it('should toggle cell state', () => {
    component.toggleCell(0, 0);
    expect(component.grid[0][0]).toBeTrue();
    component.toggleCell(0, 0);
    expect(component.grid[0][0]).toBeFalse();
  });
});
