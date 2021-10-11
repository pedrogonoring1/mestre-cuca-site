export class CarouselRequest {
  TituleCarousel: string;
  TextSecundary: string;
  LinkImage: string;
  LinkRedirect: string;

  constructor(params: Partial<CarouselRequest>) {
    this.TituleCarousel = params.TituleCarousel || '';
    this.TextSecundary = params.TextSecundary || '';
    this.LinkImage = params.LinkImage || '';
    this.LinkRedirect = params.LinkRedirect || '';
  }
}
