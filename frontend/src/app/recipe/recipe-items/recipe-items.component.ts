import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  recipes: any

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadAllRecipes().subscribe({
      next: (value) => {
        this.recipes = value.meals;
      },
      error: (err) => {
        console.error(err);
      }
    })

  }
}
