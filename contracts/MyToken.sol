pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  string public name = "Sample Coin";
  string public symbol = "SMPC";
  uint8 public decimals = 8;
  uint public INITIAL_SUPPLY = 8000000 * 100000000;

  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

}
