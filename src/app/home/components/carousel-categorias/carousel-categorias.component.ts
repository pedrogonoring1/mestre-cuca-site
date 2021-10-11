import { Component, OnInit } from '@angular/core';

import { CarouselCategoriasResponse } from '../../models/responses/carousel-categorias.response';

@Component({
  selector: 'app-carousel-categorias',
  templateUrl: './carousel-categorias.component.html',
  styleUrls: ['./carousel-categorias.component.css']
})
export class CarouselCategoriasComponent implements OnInit {

  public itensCarouselCategory: Array<CarouselCategoriasResponse>;

  constructor() { }

  ngOnInit(): void {
    this.itensCarouselCategory = [];

    var iten1 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/vDNdhp5/test3.png',
      NameCategory: 'Doces',
      LinkRedirect: '/not-found'
    })

    var iten2 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/zHS7MrW/test4.png',
      NameCategory: 'Almoço',
      LinkRedirect: '/not-found'
    })

    var iten3 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/8YJB6cs/test5.png',
      NameCategory: 'Jantar',
      LinkRedirect: '/not-found'
    })

    var iten4 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/x5wHhZ9/test6.png',
      NameCategory: 'Lanche',
      LinkRedirect: '/not-found'
    })

    var iten5 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/QnG2Kk5/test7.png',
      NameCategory: 'Tortas',
      LinkRedirect: '/not-found'
    })

    var iten6 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/rt8TYDv/test8.png',
      NameCategory: 'Bolos',
      LinkRedirect: '/not-found'
    })

    var iten7 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/x6gxMjS/test9.png',
      NameCategory: 'Massas',
      LinkRedirect: '/not-found'
    })

    var iten8 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/PCW3RFq/test10.png',
      NameCategory: 'Peixes',
      LinkRedirect: '/not-found'
    })

    var iten9 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/BTnKpSq/test11.png',
      NameCategory: 'Saladas',
      LinkRedirect: '/not-found'
    })

    var iten10 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/GPF0sXd/test12.png',
      NameCategory: 'Bebidas',
      LinkRedirect: '/not-found'
    })

    var iten11 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/2nH62Fz/test13.png',
      NameCategory: 'Doces',
      LinkRedirect: '/not-found'
    })

    var iten12 = new CarouselCategoriasResponse({
      LinkImage: 'https://i.ibb.co/Yp8RW8w/test14.png',
      NameCategory: 'Carnes',
      LinkRedirect: '/not-found'
    })

    this.itensCarouselCategory.push(iten1);
    this.itensCarouselCategory.push(iten2);
    this.itensCarouselCategory.push(iten3);
    this.itensCarouselCategory.push(iten4);
    this.itensCarouselCategory.push(iten5);
    this.itensCarouselCategory.push(iten6);
    this.itensCarouselCategory.push(iten7);
    this.itensCarouselCategory.push(iten8);
    this.itensCarouselCategory.push(iten9);
    this.itensCarouselCategory.push(iten10);
    this.itensCarouselCategory.push(iten11);
    this.itensCarouselCategory.push(iten12);

  }

}
