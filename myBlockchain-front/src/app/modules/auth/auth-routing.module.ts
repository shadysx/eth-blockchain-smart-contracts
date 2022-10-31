import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthHomePageComponent} from "./components/auth-home-page/auth-home-page.component";

const routes: Routes = [
  {
    path: '',
    component: AuthHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
