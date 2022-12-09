import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRandomizerComponent } from './recipe-randomizer.component';

describe('RecipeRandomizerComponent', () => {
  let component: RecipeRandomizerComponent;
  let fixture: ComponentFixture<RecipeRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeRandomizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
