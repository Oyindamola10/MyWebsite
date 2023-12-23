const mongoose = require("mongoose")

//create schema 
const ProductSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   image: {
      type: String,
   },
   price: {
      type: String,
      required: true,
   }

});

//export model
module.exports = mongoose.model('Product', ProductSchema);