import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Account from "../interfaces/Account.interface";
import { accounts } from "./constants";

@Injectable({
    providedIn: 'root'
  })

export class AuthService {

    constructor(private router: Router) { }

    currentAccount: Account | null = null;

    login(username: string, password: string){
        accounts.map(account => {
            if (account.username === username && account.password === password){
                console.log("Connection from: ", account);
                this.currentAccount = account;
                this.router.navigate(["auth"])
                return true;
            }
            else {
                return false;
            }
        })
    }
}