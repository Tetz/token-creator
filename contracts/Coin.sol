pragma solidity ^0.4.18;
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract Coin is StandardToken {
  string public name = "Test Coin";
  string public symbol = "TSC";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 100000000000 * (10 ** decimals);

  function Coin() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
