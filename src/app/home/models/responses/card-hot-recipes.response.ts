export class CardHotRecipesResponse {
  public LinkRecipe: string;
  public TitleRecipe: string;
  public LinkImageCard: string;
  public ImageUserRecipe: string;
  public NameUserRecipe: string;
  public LinkPerfilUser: string;
  public UserVerificad: boolean;

  constructor(params: Partial<CardHotRecipesResponse>) {
    this.LinkRecipe = params.LinkRecipe || '';
    this.TitleRecipe = params.TitleRecipe || '';
    this.LinkImageCard = params.LinkImageCard || '';
    this.ImageUserRecipe = params.ImageUserRecipe || '';
    this.NameUserRecipe = params.NameUserRecipe || '';
    this.LinkPerfilUser = params.LinkPerfilUser || '';
    this.UserVerificad = params.UserVerificad || false;
  }
}
