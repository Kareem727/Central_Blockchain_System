//connect to database
let mongoose = require("mongoose");
let BlockChainModel = require("./model");
mongoose.connect("mongodb://localhost:3000/BlockChain", (err) =>{
    if(err) return console.log("cannot connect to database");
    console.log("Database is connected");
    connectionCallback();
});
let connectionCallback = () =>{

};
module.exports.onConnect = (callback) =>{
    connectionCallback = callback;
}