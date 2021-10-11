export class CarouselCategoriasResponse {
  public LinkImage: string;
  public NameCategory: string;
  public LinkRedirect: string;

  constructor(params: Partial<CarouselCategoriasResponse>) {
    this.LinkImage = params.LinkImage || '';
    this.NameCategory = params.NameCategory || '';
    this.LinkRedirect = params.LinkRedirect || '';
  }
}
