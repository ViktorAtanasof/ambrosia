import { RouterModule, Routes } from "@angular/router";
import { RecipeItemsComponent } from "./recipe-items/recipe-items.component";

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipeItemsComponent
        /* children: [
            
        ] */
    }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);