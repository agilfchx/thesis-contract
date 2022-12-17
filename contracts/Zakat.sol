// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Zakat {
    // Struct Xendit Invoice
    struct XenditInvoice {
        string external_id;
        string name;
        string email;
        uint256 created; // timestamp unix
        uint amount;
        bool status;
    } 

    // Struct Zakat Invoice
    struct ZakatInvoice {
        address walletAddress;
        string zakatID;
        string name;
        string email;
        string numphone;
        uint amount;
        uint256 date;
    }
    
    XenditInvoice[] public xvoice;
    ZakatInvoice[] public zvoice;

    // Create Xendit Invoice
    function storeXenditInvoice(string memory _extID, string memory _name, string memory _email, uint256 _created, uint _amount, bool _status) public {
        xvoice.push(XenditInvoice(_extID, _name, _email, _created, _amount, _status));
    }

    // Create Zakat Invoice
    function storeZakatInvoice(string memory _id, string memory _name, string memory _email, string memory _numphone, uint _amount, uint256 _date) public {
        uint i = gIdXendit(_id);
        require(xvoice[i].status == true, "Anda belum melakukan pembayaran");
        zvoice.push(ZakatInvoice(msg.sender, _id, _name, _email, _numphone, _amount, _date));
    }

    // Check Xendit Status Payment
    function statusPayment(string memory _extID) view public returns(bool){
        uint i = gIdXendit(_extID);
        if(xvoice[i].status == true){
            return true;
        } else {
            return false;
        }
    }

    // Update Xendit Status Payment
    function updateStatusPayment(string memory _extID) public returns(bool){
        uint i = gIdXendit(_extID);
        if(xvoice[i].status == false){
            xvoice[i].status = true;
            return true;
        } else {
            return false;
        }
    }

    // Get Index Xendit Invoice
    function gIdXendit(string memory _extID) view private returns(uint){
        for(uint i=0; i<xvoice.length; i++){
            if(keccak256(abi.encodePacked(xvoice[i].external_id)) == keccak256(abi.encodePacked(_extID))){
                return i;
            }
        }
        return xvoice.length;
    } 

    // Get Index Zakat Invoice
    function gIdZakat(string memory _zakatID) view private returns(uint){
        for(uint i=0; i<zvoice.length; i++){
            if(keccak256(abi.encodePacked(zvoice[i].zakatID)) == keccak256(abi.encodePacked(_zakatID))){
                return i;
            }
        }
        return zvoice.length;
    } 

}