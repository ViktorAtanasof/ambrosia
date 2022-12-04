import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { IMeal } from './shared/interfaces';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadFirstThreeRecipes() {
    return this.httpClient.get<IMeal>(`${apiURL}/filter.php?i=chicken_breast`);
  }

  loadAllRecipes() {
    return this.httpClient.get<IMeal>(`${apiURL}/filter.php?i=chicken_breast`);
  }

  loadRecipeDetails(id: string) {
    return this.httpClient.get<IMeal>(`${apiURL}/lookup.php?i=${id}`);
  }
}
