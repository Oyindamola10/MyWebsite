const mongoose = require("mongoose")

//create schema 
const ContactSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   phone: {
      type: Number,
   },

   subject:{
      type: String
   },
   message: {
      type: String,
      required: true,
   }


});

//export model
module.exports = mongoose.model('Contact', ContactSchema);