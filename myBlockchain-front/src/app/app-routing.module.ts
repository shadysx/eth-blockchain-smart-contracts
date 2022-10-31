import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WalletGuard} from "./security/wallet.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/guest/guest.module').then(m => m.GuestModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [WalletGuard]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
