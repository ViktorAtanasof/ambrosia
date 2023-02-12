import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IMeal } from "src/app/shared/interfaces";

@Injectable({
    providedIn: 'root'
})

export class RecipeResolver implements Resolve<IMeal | null> {
    constructor(private apiService: ApiService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IMeal | null | Observable<IMeal> | Promise<IMeal> {
        const recipeId = route.params['id'];
       /*  if (!recipeId) {
            this.router.navigate(['/']);
            return null;
        } */
        this.apiService.loadRecipeDetails(recipeId).subscribe((v) => {
            if (v.meals === null) {
                this.router.navigate(['/not-found']);
            }
        });

        return this.apiService.loadRecipeDetails(recipeId);
    }
}