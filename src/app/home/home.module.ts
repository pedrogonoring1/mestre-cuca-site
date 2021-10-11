import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'

import { HomeComponent } from "./page/home/home.component";
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { CarouselCategoriasComponent } from './components/carousel-categorias/carousel-categorias.component';
import { CardHotRecipesComponent } from './components/card-hot-recipes/card-hot-recipes.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselHomeComponent,
    CarouselCategoriasComponent,
    CardHotRecipesComponent,
  ],
  imports: [BrowserModule, IvyCarouselModule, TooltipModule.forRoot()],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
