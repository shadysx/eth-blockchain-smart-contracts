import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuestHomePageComponent} from "./views/guest-home-page/guest-home-page.component";

const routes: Routes = [
  {
    path: '',
    component: GuestHomePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
