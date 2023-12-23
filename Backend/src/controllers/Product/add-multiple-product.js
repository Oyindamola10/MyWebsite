import Product from "../../models/Product.js";
import Appresponse from "../../helper/appResponse.js";

const addMultipleProduct = async (req, res) => {
  const productData = req.body;
  try {
    // Validate input

    // Use insertMany to insert multiple documents
    const newProducts = await Product.insertMany(productData);
    if (!newProducts) {
      return Appresponse(res, 400, "Something went wrong");
    }
    return Appresponse(res, 201, "Products added successfully", newProducts);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err.message);
  }
};

export default addMultipleProduct;
