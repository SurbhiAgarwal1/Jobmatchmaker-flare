// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract MultiWill {
//     struct Will {
//         address recipient;
//         uint256 amount;
//         bool claimed;
//     }

//     mapping(address => Will[]) public wills; // Each owner can have multiple wills

//     function createWill(address _recipient) public payable {
//         require(_recipient != address(0), "Invalid recipient address");
//         require(msg.value > 0, "Amount must be greater than zero");

//         wills[msg.sender].push(Will({
//             recipient: _recipient,
//             amount: msg.value,
//             claimed: false
//         }));
//     }

//     function claimWill(address _owner, uint256 _index) public {
//         require(_index < wills[_owner].length, "Invalid will index");

//         Will storage userWill = wills[_owner][_index];
//         require(msg.sender == userWill.recipient, "Only recipient can claim");
//         require(!userWill.claimed, "Already claimed");
//         require(userWill.amount > 0, "No funds to claim");

//         userWill.claimed = true;
//         payable(userWill.recipient).transfer(userWill.amount);
//     }

//     function getMyWillsCount() public view returns (uint256) {
//         return wills[msg.sender].length;
//     }

//     function getWill(address _owner, uint256 _index) public view returns (address recipient, uint256 amount, bool claimed) {
//         require(_index < wills[_owner].length, "Invalid will index");
//         Will memory userWill = wills[_owner][_index];
//         return (userWill.recipient, userWill.amount, userWill.claimed);
//     }

//     function getContractBalance() public view returns (uint256) {
//         return address(this).balance;
//     }
// }
