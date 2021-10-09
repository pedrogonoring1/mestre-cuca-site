import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddRecipesComponent } from "./page/add/add-recipes/add-recipes.component";
import { ListingRecipesComponent } from "./page/listing/listing-recipes/listing-recipes.component";

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {
        path: 'add-recipes',
        component: AddRecipesComponent
      },
      {
        path: 'listing',
        component: ListingRecipesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
