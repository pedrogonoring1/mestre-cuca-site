import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/page/login.component";
import { SignupComponent } from "./signup/page/signup.component";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [],
  providers: [],
})
export class AutenticationModule { }
