pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Toad is ERC721MetadataMintable, Ownable {

  string public name;
  string public symbol;

  mapping(uint256 => bool) public boop;

  constructor(string memory _name, string memory _symbol)
    ERC721Metadata(_name, _symbol)
  public {
    name = _name;
    symbol = _symbol;
  }

  function mintWithTokenURI(address _to, uint256 _id, string memory _uri) public onlyMinter returns(bool) {
  boop[_id] = false;
  super.mintWithTokenURI(_to, _id, _uri);
  return true;
}

function boopIt(uint256 _id) public onlyOwner {
  boop[_id] = true;
}

}