// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    struct User {
        string name;
        uint age;
    }

    User[] public users;

    function set(uint x, string memory y) public {
        users.push(User(y, x));
    }

    function get() public view returns (User[] memory) {
        User[] memory result = new User[](users.length);
        for(uint i=0;i<users.length;i++){
            result[i] = users[i];
        }
        return result;
    }

    function getAge(string memory name) public view returns (uint) {
        for(uint i=0;i<users.length;i++){
            if(keccak256(abi.encodePacked(users[i].name)) == keccak256(abi.encodePacked(name))){
                return users[i].age;
            }
        }
        return 0;
    }

}