import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticationRoutingModule } from "./autenticacao/autentication-routing.module";
import { HomeRoutingModule } from "./home/home-routing.module";
import { ReceitaRoutingModule } from "./receitas/receita-routing.module";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AutenticationRoutingModule,
    ReceitaRoutingModule,
    HomeRoutingModule

  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
