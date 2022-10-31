import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {BigNumber, ethers} from "ethers";
import {Router} from "@angular/router";
import {abi} from "./constants.js"

@Injectable({
  providedIn: 'root'
})

export class MetaMaskService {

  constructor(private router: Router) { }

  provider = new ethers.providers.Web3Provider(window.ethereum);

  async connectToMetaMask(){
    try {
      const signer = await this.provider.getSigner();
      await this.provider.send("eth_requestAccounts", []);
      await this.router.navigate(['auth']);
    }
    catch(err){
     console.log(err);
    }
  }

  async checkMetaMaskConnection(): Promise<boolean>{
    const signer = await this.provider.getSigner();
    console.log("Checking MetaMask Connection in guard: ");
    try {
      const address = await signer.getAddress();
      console.log("Account Found");
      return true
    }
    catch (err){
      console.log("Account Not Found");
      return false;
    }
  }

  async getMetaMaskBalance(): Promise<string> {
    let retVal: string = "";
    try {
      const signer = await this.provider.getSigner();
      retVal = ethers.utils.formatEther(await signer.getBalance());
    }
    catch (err) {
      console.log("Could not get balance");
    }
    return retVal;
  }

  async getMetaMaskAddress(): Promise<string> {
    const signer = await this.provider.getSigner();
    return await signer.getAddress();
  }

  //Fund a contract, need abi
  async fund(contractAddress: string, ethAmount: string) {

    console.log(`Funding with ${contractAddress} ${ethAmount}`)
      const signer = this.provider.getSigner();
      const signerBalance = await signer.getBalance()
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract['fund']({value: ethers.utils.parseEther(ethAmount)})
        //await listenForTransactionMine(transactionResponse, provider);
        console.log("Done!")
      }
        //listen for the tx to be mined
      catch (err){
        console.log(err);
      }
  }
}
