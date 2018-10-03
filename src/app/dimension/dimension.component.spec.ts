import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionComponent } from './dimension.component';
import { Idim } from '../interfaces';

describe('DimensionComponent', () => {
  let component: DimensionComponent;
  let fixture: ComponentFixture<DimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DimensionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionComponent);
    component = fixture.componentInstance;
    // Before fixture.detect changes, setup any component inputs
    // particularly if they are being called by the html
    component.dim = { p1: [0, 0], p2: [0, 0], label: 'label' } as Idim;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Basic tests around calculate label x and label y. Could write more
  // around unexpected inputs but like inputs being null or arrays only
  // having length of one but I dont know if that is possible in the app
  it('should calcLablelX correctly', () => {
    const p1 = [4, 100];
    const p2 = [6, 100];
    expect(component.calcLabelX(p1, p2)).toBe(5);
  });

  it('should calcLablelY correctly', () => {
    const p1 = [100, 3];
    const p2 = [100, 5];
    expect(component.calcLabelY(p1, p2)).toBe(4);
  });

  it('should roundN correctly given 0 decimals', () => {
    expect(component.roundN(0.111, 0)).toBe(0);
  });

  it('should roundN correctly given number or decimals', () => {
    expect(component.roundN(0.11111, 3)).toBe(0.111);
  });

  // spyOn allows you to mock functions that you are not testing.
  // In this scenerio it allows us to test addDim() regardless of what roundN doues
  it('addDim() should properly format string', () => {
    spyOn(component, 'roundN').and.returnValue(0);
    const result = component.addDim([1, 2], [3, 4]);
    expect(result).toBe('M 1 2 l 0 0 m 0 0 l 0 0 M 3 4 l 0 0');
  });
});
