const mongoose = require("mongoose")

//create schema 
const CartSchema = new mongoose.Schema({
   product_id: String,
   
   
});

//export model
module.exports = mongoose.model('Cart', CartSchema);
