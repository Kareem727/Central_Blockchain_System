let hash = require('object-hash');

const Target_Hash = 1562;
let validator = require("./validator")
let mongoose = require("mongoose");
let BlockChainModel = mongoose.model("BlockChain");
let chalk = require("chalk");
class BlockChain{

    constructor(){
        this.chain = [];
        this.curr_transaction = [];
    }

    addNewBlock(prevHash){
let block ={
    index: this.chain.length +1,
    timestamp: Date.now(),
    transaction: this.curr_transaction,
    hash: null,
    prevHash: prevHash,
};

if(validator.proofOfWork() == Target_Hash){
    block.hash = hash(block);
    let newBlock = new BlockChainModel(this.block);
    newBlock.save( (err) =>{
        if(err) return console.log(chalk.red("Cannot save block to DB" , err.message));
        console.log(chalk.green("Block Saved on the DB"));
    })
}
//Put hash
this.hash = hash(block);
// add to chain
    this.chain.push(block);
   }
   addNewTransaction(sender, recipient, amount){
      this.curr_transaction.push({ sender,recipient, amount});
   }
   lastBlock(){
       return this.chain.slice(-1)[0];
   }
   isEmpty(){
       return this.chain.length == 0;
   }
}

module.exports = BlockChain;