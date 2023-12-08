const mongoose = require("mongoose")

//create schema 
const ProductSchema = new mongoose.Schema({
   name: String,
   image: String,
   price: String
   
});

//export model
module.exports = mongoose.model('Product', ProductSchema);