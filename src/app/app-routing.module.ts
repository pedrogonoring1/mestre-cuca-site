import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticationRoutingModule } from "./autenticacao/autentication-routing.module";
import { HomeRoutingModule } from "./home/home-routing.module";
import { RecipeModule } from "./recipes/recipe.module";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AutenticationRoutingModule,
    RecipeModule,
    HomeRoutingModule

  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
