// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Main {
    address public immutable i_owner;

    mapping(address => uint256) public addressToAmountFunded;
    address[] public funders;

    constructor() payable {
        i_owner = msg.sender;
    }

    function getOwner() public view returns(address) {
        return i_owner;
    }

    function getOwnerBalance() public view returns(uint256) {
        return i_owner.balance;
    }

    function fund() public payable {
        require(msg.value > 0, "You need to spend some ETH!");
        addressToAmountFunded[msg.sender] += msg.value;
        funders.push(msg.sender);
    }

    function withdraw() public {
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call Failed");
    }
}
