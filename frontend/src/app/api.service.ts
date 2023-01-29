import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMeal } from './shared/interfaces';

const apiURL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  // TODO
  loadFirstThreeRecipes() {
    return this.httpClient.get<IMeal>(`${apiURL}/filter.php?i=`);
  }

  loadAllRecipes() {
    return this.httpClient.get<IMeal>(`${apiURL}/filter.php?i=`);
  }

  loadRecipeDetails(id: string) {
    return this.httpClient.get<IMeal>(`${apiURL}/lookup.php?i=${id}`);
  }

  generateRandomRecipe() {
    return this.httpClient.get<IMeal>(`${apiURL}/random.php`);
  }

  searchByMainIngredient(ingredient: string) {
    return this.httpClient.get<IMeal>(`${apiURL}/filter.php?i=${ingredient}`);
  }
}
