pragma solidity ^0.8.3;

/*

  This is just a very simple example contract used to demonstrate the BouncerProxy making calls to it

*/

contract Example {
    //constructor() public {}

    //it keeps a count to demonstrate stage changes
    uint256 public count = 0;

    //it can receive funds
    // function()   payable  {
    //     emit Received(msg.sender, msg.value);
    // }

    // event Received(address indexed sender, uint256 value);

    //and it can add to a count
    function addAmount(uint256 amount) public returns (bool) {
        count = count + amount;
        return true;
    }
}
