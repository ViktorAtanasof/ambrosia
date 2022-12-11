import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeItemsComponent } from "./recipe-items/recipe-items.component";
import { RecipeRandomizerComponent } from "./recipe-randomizer/recipe-randomizer.component";
import { RecipeResolver } from "./resolvers/recipe.resolver";

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipeItemsComponent,
    }, 
    {
        path: 'recipes/details/:id',
        resolve: {
            recipe: RecipeResolver
        },
        component: RecipeDetailsComponent
    },
    {
        path: 'random-recipe',
        component: RecipeRandomizerComponent,
    }
];

export const RecipeRoutingModule = RouterModule.forChild(routes);