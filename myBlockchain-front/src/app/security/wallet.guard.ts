import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import { AuthService } from '../services/auth.service';
import {MetaMaskService} from "../services/metamask.service";

@Injectable({
  providedIn: 'root'
})
export class WalletGuard implements CanActivate {
  constructor(private authService: AuthService, private metamaskService: MetaMaskService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  // Check metamask connection
  //   return this.web3Service.checkMetaMaskConnection()
  //     .then(result => {
  //       if (result) {
  //         return true
  //       }
  //       else {
  //         this.router.navigate([""])
  //         return false
  //       }
  //     })

  // Check the user connection
    
    if (this.authService.currentAccount != null){
      console.log("Guard checking account: Account found");
      return true;
    }
    else {
      console.log("Guard checking account: Account not found");
      this.router.navigate([""]);
      return false;
    }
  }
}
