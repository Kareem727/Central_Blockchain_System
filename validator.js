let hash = require('object-hash');


module.exports.validProof =() =>{
    let guessHash = hash(proof);
    console.log("Hashing: ", guessHash);
    return guessHash == hash(PROOF);
}

module.exports.proofOfWork = () =>{
    let proof = 0;
    while(true){
if(!ValidProof(proof)){
    proof++;
}else{
    break;
}
    }
    return hash(proof);
}