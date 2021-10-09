import { NgModule } from "@angular/core";

import { AddRecipesComponent } from "./page/add/add-recipes/add-recipes.component";
import { ListingRecipesComponent } from "./page/listing/listing-recipes/listing-recipes.component";

@NgModule ({
  declarations: [
    AddRecipesComponent,
    ListingRecipesComponent,
  ],
  imports: [],
  providers: []
})
export class RecipeModule { }
