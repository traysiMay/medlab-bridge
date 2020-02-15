pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract AlphaToad is ERC721MetadataMintable, Ownable {
    string public name;
    string public symbol;

    mapping(address => uint256[]) public toadMap;
    mapping(uint256 => bool) public boop;

    constructor(string memory _name, string memory _symbol)
        public
        ERC721Metadata(_name, _symbol)
    {
        name = _name;
        symbol = _symbol;
    }

    function mintWithTokenURI(address _to, uint256 _id, string memory _uri)
        public
        onlyMinter
        returns (bool)
    {
        boop[_id] = false;
        super.mintWithTokenURI(_to, _id, _uri);
        toadMap[_to].push(_id);
        return true;
    }

    function getToadMap(address _for) public view returns (uint256[] memory) {
        return toadMap[_for];
    }

    function boopIt(uint256 _id) public onlyMinter {
        boop[_id] = true;
    }

    function unBoopIt(uint256 _id) public onlyMinter {
        boop[_id] = false;
    }
}
