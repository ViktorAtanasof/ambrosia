import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeItemsComponent } from './recipe-items/recipe-items.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeRandomizerComponent } from './recipe-randomizer/recipe-randomizer.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipeItemsComponent,
    RecipeDetailsComponent,
    RecipeRandomizerComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RecipeModule { }
