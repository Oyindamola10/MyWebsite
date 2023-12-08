const mongoose = require("mongoose")

//create schema 
const LoginSchema = new mongoose.Schema({
   username: String,
   password: String
   
   
});

//export model
module.exports = mongoose.model('Login', LoginSchema);