
let database = require("./database");
database.onConnect(() =>{


let BlockChain = require("./BlockChain");
let blockchain = new BlockChain();

let hash = require('object-hash');

let PROOF = 156;


if(proofOfWork() == PROOF){
    blockchain.addNewTransaction("kareem","Hema",100);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
}

console.log("Chain : " , blockchain.chain);


});