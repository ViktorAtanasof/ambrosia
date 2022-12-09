import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-recipe-randomizer',
  templateUrl: './recipe-randomizer.component.html',
  styleUrls: ['./recipe-randomizer.component.css']
})
export class RecipeRandomizerComponent implements OnInit {

  recipes: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.generateRandomRecipe().subscribe({
      next: (value) => {
        this.recipes = value.meals;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  generateRecipe() {
    this.ngOnInit();
  }

}
