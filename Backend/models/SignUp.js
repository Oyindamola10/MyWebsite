const mongoose = require("mongoose")

//create schema 
const SignUpSchema = new mongoose.Schema({
     fullname: String,
     username: String,
     email: String,
     phone:{
        type: Number
     },
     password: String,
     confirmPassword:String
   
   
});

//export model
module.exports = mongoose.model('signUp', SignUpSchema);