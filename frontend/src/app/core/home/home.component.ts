import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IMeal } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadFirstThreeRecipes().subscribe({
      next: (value) => {
        if (value.meals.length > 3) {
            this.recipes = value.meals.splice(0, 3);
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
