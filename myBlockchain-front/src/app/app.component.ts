import {Component, OnInit} from '@angular/core';
import {MetaMaskService} from "./services/metamask.service";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myBlockchain-front';

  constructor(public metamaskService: MetaMaskService) {}

  balance: string = "";

  async ngOnInit(): Promise<void> {
    this.balance = await this.metamaskService.getMetaMaskBalance();
  }



}
