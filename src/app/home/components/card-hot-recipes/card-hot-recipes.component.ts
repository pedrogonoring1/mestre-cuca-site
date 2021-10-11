import { Component, OnInit } from '@angular/core';

import { CardHotRecipesResponse } from '../../models/responses/card-hot-recipes.response';


@Component({
  selector: 'app-card-hot-recipes',
  templateUrl: './card-hot-recipes.component.html',
  styleUrls: ['./card-hot-recipes.component.css']
})
export class CardHotRecipesComponent implements OnInit {

  public cardsHotRecipes: Array<CardHotRecipesResponse>;

  constructor() { }

  ngOnInit(): void {
    this.cardsHotRecipes =[];

    var card1 = new CardHotRecipesResponse({
      LinkRecipe: '/not-found',
      TitleRecipe: 'Pão de Alho feito na grelha super rápido',
      LinkImageCard: 'https://i.ibb.co/yS4K4sy/teste1.png',
      ImageUserRecipe: 'https://www.superprof.com.br/imagens/anuncios/professor-home-chef-cozinha-aulas-individuais-grupo-nas-areas-confeitaria-panificacao-cozinha-quente.jpg',
      NameUserRecipe: 'Cláudio Gomes',
      LinkPerfilUser: '/auth/signup',
      UserVerificad: false,
    })

    var card2 = new CardHotRecipesResponse({
      LinkRecipe: '/not-found',
      TitleRecipe: 'Bolo de Cenoura com Cobertura de Brigadeiro',
      LinkImageCard: 'https://i.ibb.co/D7Y7tYW/teste2.png',
      ImageUserRecipe: 'https://i.ibb.co/FnVygnJ/test1.png',
      NameUserRecipe: 'Maria Lopes',
      LinkPerfilUser: '/auth/signup',
      UserVerificad: true,
    })

    var card3 = new CardHotRecipesResponse({
      LinkRecipe: '/not-found',
      TitleRecipe: 'Lasanha de Panqueca com Brócolis e Molho Branco',
      LinkImageCard: 'https://i.ibb.co/J77f3fZ/teste3.png',
      ImageUserRecipe: 'https://i.ibb.co/dLpqJzJ/test2.png',
      NameUserRecipe: 'Carla Silva',
      LinkPerfilUser: '/auth/signup',
      UserVerificad: false,
    })

    var card4 = new CardHotRecipesResponse({
      LinkRecipe: '/not-found',
      TitleRecipe: 'Talharim com Molho Branco Light',
      LinkImageCard: 'https://i.ibb.co/sjNJKk1/teste4.png',
      ImageUserRecipe: 'https://www.superprof.com.br/imagens/anuncios/professor-home-chef-cozinha-aulas-individuais-grupo-nas-areas-confeitaria-panificacao-cozinha-quente.jpg',
      NameUserRecipe: 'Cláudio Gomes',
      LinkPerfilUser: '/auth/signup',
      UserVerificad: false,
    })

    var card5 = new CardHotRecipesResponse({
      LinkRecipe: '/not-found',
      TitleRecipe: 'Fricassê de Frango',
      LinkImageCard: 'https://i.ibb.co/Pt0khxc/teste5.png',
      ImageUserRecipe: 'https://i.ibb.co/FnVygnJ/test1.png',
      NameUserRecipe: 'Maria Lopes',
      LinkPerfilUser: '/auth/signup',
      UserVerificad: true,
    })

    var card6 = new CardHotRecipesResponse({
      LinkRecipe: '/not-found',
      TitleRecipe: 'Moqueca Capixaba - a Legítima 😍',
      LinkImageCard: 'https://i.ibb.co/x3ydjLt/teste6.png',
      ImageUserRecipe: 'https://www.superprof.com.br/imagens/anuncios/professor-home-chef-cozinha-aulas-individuais-grupo-nas-areas-confeitaria-panificacao-cozinha-quente.jpg',
      NameUserRecipe: 'Pedro Gonoring',
      LinkPerfilUser: '/auth/signup',
      UserVerificad: true,
    })
    this.cardsHotRecipes.push(card1);
    this.cardsHotRecipes.push(card2);
    this.cardsHotRecipes.push(card6);
    this.cardsHotRecipes.push(card3);
    this.cardsHotRecipes.push(card4);
    this.cardsHotRecipes.push(card5);
  }
}
