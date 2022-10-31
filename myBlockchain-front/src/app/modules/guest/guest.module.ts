import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestHomePageComponent } from './views/guest-home-page/guest-home-page.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    GuestHomePageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
