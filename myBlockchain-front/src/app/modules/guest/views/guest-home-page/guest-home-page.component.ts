import { Component, OnInit } from '@angular/core';
import {MetaMaskService} from "../../../../services/metamask.service";

@Component({
  selector: 'app-guest-home-page',
  templateUrl: './guest-home-page.component.html',
  styleUrls: ['./guest-home-page.component.css']
})
export class GuestHomePageComponent implements OnInit {

  constructor(public metamaskService: MetaMaskService) { }

  ngOnInit(): void {

  }



}
