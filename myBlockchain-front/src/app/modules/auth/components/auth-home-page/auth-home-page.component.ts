import { Component, OnInit } from '@angular/core';
import {MetaMaskService} from "../../../../services/metamask.service";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-auth-home-page',
  templateUrl: './auth-home-page.component.html',
  styleUrls: ['./auth-home-page.component.css']
})
export class AuthHomePageComponent implements OnInit {

  constructor(public authService: AuthService,
              public metamaskService: MetaMaskService,
              private router: Router,
              public web3Service: Web3Service) { }

  balance: string = "";
  address: string = "";

  async ngOnInit(): Promise<void> {
    this.address = this.authService.currentAccount!.wallet;
    this.balance = await this.web3Service.getBalance();
   }

}
