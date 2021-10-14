import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/autenticacao/signup/models/responses/user.response';
import { RecipeRespone } from 'src/app/recipes/models/responses/recipes.response';

@Component({
  selector: 'app-listing-recipes',
  templateUrl: './listing-recipes.component.html',
  styleUrls: ['./listing-recipes.component.css']
})
export class ListingRecipesComponent implements OnInit {

  public recipe: RecipeRespone;

  constructor() { }

  ngOnInit(): void {
    this.recipe = new RecipeRespone({
      TitleRecipe: 'Pão de Alho feito na grelha super rápido',
      LinkImage: 'https://i.ibb.co/yS4K4sy/teste1.png',
      Time: 5,
      Views: 1581,
      StepRecipe: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nibh sed lectus pretium volutpat.
Curabitur ut dignissim dolor. Praesent efficitur mattis lorem, vel aliquam nibh luctus sagittis.
Mauris rutrum vestibulum augue. In accumsan cursus arcu et finibus. Donec convallis tortor in elit faucibus
vehicula. Sed tincidunt varius urna sed iaculis.

Praesent et justo quis nisi semper pellentesque non a urna. Lorem ipsum dolor sit amet, consectetur adipiscing.
Sed egestas nibh sed lectus pretium volutpat. Curabitur ut dignissim dolor. Praesent efficitur mattis lorem,
nibh luctus sagittis. Mauris rutrum vestibulum augue. In accumsan cursus arcu et finibus. Donec convallis tortor.`,
      User: new User({
        Name: 'Dona',
        LastName: 'Gigi' ,
        LinkImage: 'https://i.ibb.co/FnVygnJ/test1.png',
        id: 'asdh456asd0sa5',
        UserVerificad: true,
      })
    })

    console.log(this.recipe);
  }

}
