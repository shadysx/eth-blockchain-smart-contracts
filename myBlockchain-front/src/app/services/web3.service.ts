import { Injectable } from '@angular/core';
import { BigNumber, ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  constructor() {

  }

  provider = ethers.getDefaultProvider("https://eth-goerli.g.alchemy.com/v2/tq9NPQiUnEGPVDUfwpweF3IdL8boh981");


  async getBalance(){
    //let network = await ethers.providers.getNetwork(5);
    //console.log(network);
    console.log(this.provider)
    let balance: string | BigNumber = await this.provider.getBalance("0x2703372EC226B3D5EC671Ee361aE0E7dFB590115");
    balance = ethers.utils.formatEther(balance);
    return balance;
  }
}
