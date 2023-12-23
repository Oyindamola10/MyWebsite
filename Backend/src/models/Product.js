import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    image: { type: String },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
