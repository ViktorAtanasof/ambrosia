import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IRecipe } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  recipes: IRecipe[] | undefined;
  searchValue: string | undefined;

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  constructor(private apiService: ApiService) {
    this.searchForm.get('search')?.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((v) => this.apiService.searchByMainIngredient(v))
      )
      .subscribe({
        next: (value) => {
          this.recipes = value.meals?.splice(0, 12);
          this.searchValue = this.searchForm.get('search')?.value;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  ngOnInit(): void {
    this.apiService.loadAllRecipes().subscribe({
      next: (value) => {
        // Object -> meals[Objects]
        if (value.meals.length > 12) {
          this.recipes = value.meals.splice(0, 12);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
