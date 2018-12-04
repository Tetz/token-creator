pragma solidity ^0.4.24;
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract Coin is StandardToken {
  string public name = "Cat Coin";
  string public symbol = "CAT";
  uint public decimals = 8;
  uint public INITIAL_SUPPLY = 555555 * (10 ** decimals);

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
