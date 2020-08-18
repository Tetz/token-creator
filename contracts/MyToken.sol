pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  constructor() public ERC20("Test Coin", "TCN") {
    _mint(msg.sender, 5000 * 10 ** uint256(18));
  }
}
