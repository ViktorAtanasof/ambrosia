import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeItemsComponent } from './recipe-items/recipe-items.component';



@NgModule({
  declarations: [
    RecipeItemsComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  exports: [
    /* RecipeItemsComponent */
  ]
})
export class RecipeModule { }
