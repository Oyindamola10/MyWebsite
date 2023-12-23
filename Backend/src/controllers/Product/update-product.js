import Product from "../../models/Product.js";
import Appresponse from "../../helper/appResponse.js";
import mongoose from "mongoose";

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  if (!mongoose.isValidObjectId(productId)) {
    return Appresponse(res, 400, "Invalid ObjectId format");
  }
  try {
    // Add validation to restrict the attribute that can be passed

    if (Object.keys(req.body).length === 0) {
      return Appresponse(
        res,
        400,
        "Missing attribute, pass at lease one attribute for update"
      );
    }

    // This way you can pass in any attribute without using if - else
    const updatedFields = req.body;

    const product = await Product.findByIdAndUpdate(productId, updatedFields, {
      new: true,
    });

    if (!product) {
      return Appresponse(res, 404, `Product with ID "${productId} not found"`);
    }

    return Appresponse(res, 200, "Product updated successful", product);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err.message);
  }
};

export default updateProduct;
