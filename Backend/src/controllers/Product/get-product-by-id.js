import Product from "../../models/Product.js";
import Appresponse from "../../helper/appResponse.js";
import mongoose from "mongoose";

const getProductById = async (req, res) => {
  const { productId } = req.params;
  if (!mongoose.isValidObjectId(productId)) {
    return Appresponse(res, 400, "Invalid ObjectId format");
  }
  try {
    const product = await Product.findById({ _id: productId });
    if (!product) {
      return Appresponse(res, 404, `Product with ID "${productId} not found"`);
    }
    return Appresponse(res, 200, `Product retrieved`, product);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err.message);
  }
};

export default getProductById;
