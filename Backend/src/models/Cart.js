import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
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
  },
});

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
