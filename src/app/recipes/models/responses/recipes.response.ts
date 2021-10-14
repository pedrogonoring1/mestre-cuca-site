import { User } from "src/app/autenticacao/signup/models/responses/user.response";

export class RecipeRespone {
  public TitleRecipe: string;
  public LinkImage: string;
  public User: User;
  public Views: number;
  public Time: number;
  public StepRecipe: string;

  constructor(params: Partial<RecipeRespone>) {
    this.TitleRecipe = params.TitleRecipe || '';
    this.LinkImage = params.LinkImage || '';
    this.User = params.User || new User({});
    this.Views = params.Views || 0;
    this.Time = params.Time || 0;
    this.StepRecipe = params.StepRecipe || '';
  }
}
