import { Component, OnInit } from '@angular/core';
import { CarouselRequest } from '../../models/responses/carousel-home.request';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements OnInit {

  public carousels: Array<CarouselRequest>;

  constructor() { }

  ngOnInit(): void {
    this.carousels = []

    var carousel1 = new CarouselRequest({
      TituleCarousel: 'Receitas Especiais para a Criançada',
      TextSecundary: '20 Receitas para o dia das Crianças',
      LinkImage: 'https://i.ibb.co/Yj8JsDq/test1.png',
      LinkRedirect: '/not-found',
    })

    var carousel2 = new CarouselRequest({
      TituleCarousel: 'Se torne um especialista na churrasqueira!',
      TextSecundary: 'Preparamos 100 dicas para fazer aquele churrasco massa!',
      LinkImage: 'https://i.ibb.co/QY36sNb/test2.png',
      LinkRedirect: '/not-found',
    })

    this.carousels.push(carousel1);
    this.carousels.push(carousel2);
  }

}
