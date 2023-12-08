const mongoose = require("mongoose")

//create schema 
const ContactSchema = new mongoose.Schema({
   name: String,
   email: String,
   phone:{
    type: Number
   },
   password: String,
   subject: String,
   message: String
   
   
});

//export model
module.exports = mongoose.model('Contact', ContactSchema);