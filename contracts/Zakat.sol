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
        uint256 amount;
        uint256 date;
        bool statusPayment;
        string ipfsHash;
    }

    struct PG {
        string extID;
        string paymentMethod;
        uint256 amount;
        bool status;
        string currency;
        string paymentChannel;
        string payerEmail;
        uint256 date;
    }

    ZakatIVC[] public zvoice;
    PG[] public pg;

    function store(
        string memory _zakatID,
        string memory _name,
        string memory _email,
        string memory _phoneNum,
        uint256 _amount,
        string memory _ipfsHash
    ) public {
        bool status = checkPayment(msg.sender);
        require(status == true, "Tunggu bulan berikutnya");
        zvoice.push(
            ZakatIVC(
                msg.sender,
                _zakatID,
                _name,
                _email,
                _phoneNum,
                _amount,
                block.timestamp,
                true,
                _ipfsHash
            )
        );
    }

    function storePG(
        string memory _extID,
        string memory _paymentMethod,
        uint256 _amount,
        bool _status,
        string memory _currency,
        string memory _paymentChannel,
        string memory _payerEmail
    ) public {
        require(msg.sender == owner, "Anda tidak memiliki akses");
        pg.push(
            PG(
                _extID,
                _paymentMethod,
                _amount,
                _status,
                _currency,
                _paymentChannel,
                _payerEmail,
                block.timestamp
            )
        );
    }

    function getPG() public view returns (PG[] memory) {
        PG[] memory result = new PG[](pg.length);
        for (uint256 i = 0; i < pg.length; i++) {
            result[i] = pg[i];
        }
        return result;
    }

    function checkPayment(address _walletAddress) public view returns (bool) {
        uint256 lastPayment = 0;
        uint256 oneMonthInSeconds = 2592000; // 30 d x 24 h x 60 m x 60 s
        for (uint256 i = 0; i < zvoice.length; i++) {
            if (zvoice[i].walletAddress == _walletAddress) {
                if (zvoice[i].date > lastPayment) {
                    lastPayment = zvoice[i].date;
                }
            }
        }
        return (block.timestamp - lastPayment >= oneMonthInSeconds);
    }

    function verifyFile(string memory _ipfsHash) public view returns (bool) {
        bool valid = false;
        for (uint256 i = 0; i < zvoice.length; i++) {
            if (
                keccak256(abi.encodePacked(zvoice[i].ipfsHash)) ==
                keccak256(abi.encodePacked(_ipfsHash))
            ) {
                valid = true;
                break;
            }
        }
        return valid;
    }

    function getAll() public view returns (ZakatIVC[] memory) {
        ZakatIVC[] memory result = new ZakatIVC[](zvoice.length);
        for (uint256 i = 0; i < zvoice.length; i++) {
            result[i] = zvoice[i];
        }
        return result;
    }

    function getHistory(address _walletAddress)
        public
        view
        returns (
            string[] memory,
            uint256[] memory,
            uint256[] memory,
            string[] memory
        )
    {
        // require(msg.sender == _walletAddress, "Address yang dimasukkan tidak sesuai dengan address anda");
        uint256 count = 0;
        for (uint256 j = 0; j < zvoice.length; j++) {
            if (zvoice[j].walletAddress == _walletAddress) {
                count++;
            }
        }
        string[] memory _zakatID = new string[](count);
        string[] memory _ipfsHash = new string[](count);
        uint256[] memory _date = new uint256[](count);
        uint256[] memory _amount = new uint256[](count);
        uint256 i = 0;
        for (uint256 j = 0; j < zvoice.length; j++) {
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
