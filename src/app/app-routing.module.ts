import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { LoginComponent } from "./login/login.component";
import { TutorialComponent } from "./tutorial/tutorial.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "game", component: GameComponent },
  { path: "tutorial", component: TutorialComponent },
  { path: "**", redirectTo: "tutorial" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
