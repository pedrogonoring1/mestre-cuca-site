import { NgModule } from "@angular/core";

import { AddRecipesComponent } from "./page/add/add-recipes/add-recipes.component";
import { ListingRecipesComponent } from "./page/listing/listing-recipes/listing-recipes.component";

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserModule } from "@angular/platform-browser";

@NgModule ({
  declarations: [
    AddRecipesComponent,
    ListingRecipesComponent,
  ],
  imports: [BrowserModule, TooltipModule.forRoot()],
  providers: []
})
export class RecipeModule { }
