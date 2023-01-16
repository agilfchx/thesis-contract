// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.7;

contract Zakat {
    uint256 currentTime;
    address owner;

    constructor() {
        owner = msg.sender;
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
        string ipfsHash;
    }

    ZakatIVC[] public zvoice;

    function store(string memory _zakatID, string memory _name, string memory _email, string memory _phoneNum, uint _amount, string memory _ipfsHash) public {
        bool status = checkPayment(msg.sender);
        require(status == true, "Tunggu bulan berikutnya");
        zvoice.push(ZakatIVC(msg.sender, _zakatID, _name, _email, _phoneNum, _amount, block.timestamp, true, _ipfsHash));

    }

    function checkPayment(address _walletAddress) public view returns(bool){
        uint lastPayment=0;
        uint oneMonthInSeconds = 2592000; // 30 d x 24 h x 60 m x 60 s
        for (uint i=0; i<zvoice.length; i++){
            if(zvoice[i].walletAddress == _walletAddress){
                if(zvoice[i].date > lastPayment){
                    lastPayment = zvoice[i].date;
                }
            }
        }
        return (block.timestamp - lastPayment >= oneMonthInSeconds);
    } 

    function verifyFile(string memory _ipfsHash) public view returns (bool){
        bool valid = false;
        for (uint i = 0; i < zvoice.length; i++) {
            if (keccak256(abi.encodePacked(zvoice[i].ipfsHash)) == keccak256(abi.encodePacked(_ipfsHash))) {
                valid = true;
                break;
            }
        }
        return valid;
    }

    function getAll() public view returns(ZakatIVC[] memory){
        ZakatIVC[] memory result = new ZakatIVC[](zvoice.length);
        for(uint i=0;i<zvoice.length;i++){
            result[i] = zvoice[i];
        }
        return result;
    }

    function getHistory(address _walletAddress) public view returns (string[] memory, uint256[] memory, uint[] memory, string[] memory) {
        // require(msg.sender == _walletAddress, "Address yang dimasukkan tidak sesuai dengan address anda");
        uint count = 0;
        for (uint j=0; j < zvoice.length; j++){
            if(zvoice[j].walletAddress == _walletAddress){
                count++;
            }
        }
        string[] memory _zakatID = new string[](count);
        string[] memory _ipfsHash = new string[](count);
        uint256[] memory _date = new uint256[](count);
        uint[] memory _amount = new uint[](count);
        uint i = 0;
        for (uint j = 0; j < zvoice.length; j++) {
            if (zvoice[j].walletAddress == _walletAddress) {
                _zakatID[i] = zvoice[j].zakatID;
                _date[i] = zvoice[j].date;
                _amount[i] = zvoice[j].amount;
                _ipfsHash[i] = zvoice[j].ipfsHash;
                i++;
            }
        }
        return (_zakatID, _date, _amount, _ipfsHash);
    }
}


// ZAKAT-5215, JAJANG, jajang@gmail.com, 08123457789, 2500, qjwkdjwqkdjqwkjw
// ZAKAT-1634, JAJANG, jajang@gmail.com, 08123457789, 2500, qmkdmqkmdkqdasfa
// ZAKAT-1212, JAJANG, jajang@gmail.com, 08123457789, 2500
// ZAKAT-4123, MUSANG, musang@gmail.com, 08123457789, 5000, qkwdlwqdlqwmdqlwm
// ZAKAT-7724, EKOR, ekor@gmail.com, 08123457789, 10000