let BlockChain = require("./BlockChain");
let blockchain = new BlockChain();

let hash = require('object-hash');

let PROOF = 156;

let ValidProof = (proof) =>{
let guessHash = hash(proof);
console.log("Hashing",guessHash);
return guessHash == hash(PROOF);
};

let proofOfWork = ()=>{
    let proof = 0;
    while(true){
if(!ValidProof(proof)){
    proof++;
}else{
    break;
}
    }
    return proof;
}

if(proofOfWork() == PROOF){
    blockchain.addNewTransaction("kareem","Hema",100);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
}

console.log("Chain : " , blockchain.chain);