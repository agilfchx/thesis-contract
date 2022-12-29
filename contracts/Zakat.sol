// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.7;

contract Zakat {
    uint256 currentTime;
    address owner;

    constructor() {
        owner = msg.sender;
        currentTime = block.timestamp;
    }

    struct ZakatIVC {
        address walletAddress;
        string zakatID;
        string name;
        string email;
        string phoneNum;
        uint amount;
        uint256 date;
        bool statusPayment;
    }

    ZakatIVC[] public zvoice;

    function store(string memory _zakatID, string memory _name, string memory _email, string memory _phoneNum, uint _amount) public {
        zvoice.push(ZakatIVC(msg.sender, _zakatID, _name, _email, _phoneNum, _amount, currentTime, true));
    }

    function getSingle(string memory _zakatID) public view returns(address, string memory, string memory, string memory, string memory, uint, uint256, bool){
        uint i = getIdx(_zakatID);
        if(keccak256(abi.encodePacked(zvoice[i].zakatID)) == keccak256(abi.encodePacked(_zakatID))){
            return(zvoice[i].walletAddress, zvoice[i].zakatID, zvoice[i].name, zvoice[i].email, zvoice[i].phoneNum, zvoice[i].amount, zvoice[i].date, zvoice[i].statusPayment);
        }
        return(address(0x0), '', '', '', '', 0, 0, false);
    }

    function getAll() public view returns(ZakatIVC[] memory){
        ZakatIVC[] memory result = new ZakatIVC[](zvoice.length);
        for(uint i=0;i<zvoice.length;i++){
            result[i] = zvoice[i];
        }
        return result;
    }

    function getIdx(string memory _zakatID) view private returns(uint){
        for(uint i=0; i<zvoice.length; i++){
            if(keccak256(abi.encodePacked(zvoice[i].zakatID)) == keccak256(abi.encodePacked(_zakatID))){
                return i;
            }
        }
        return zvoice.length;
    }
}

// ZAKAT-5215, JAJANG, jajang@gmail.com, 08123457789, 2500
// ZAKAT-4123, MUSANG, musang@gmail.com, 08123457789, 5000
// ZAKAT-7724, EKOR, ekor@gmail.com, 08123457789, 10000