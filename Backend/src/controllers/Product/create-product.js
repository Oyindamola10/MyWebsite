import Product from "../../models/Product.js";
import Appresponse from "../../helper/appResponse.js";

const createProduct = async (req, res) => {
  const { name, image, price } = req.body;
  if (!name || !image || !price) {
    return Appresponse(res, 400, "Missing attribute");
  }
  try {
    // Validate input

    const newProduct = await Product.create({
      name,
      image,
      price,
    });

    if (!newProduct) {
      return Appresponse(res, 400, "Something went wrong");
    }
    return Appresponse(res, 201, "Product added successfully", newProduct);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err.message);
  }
};

export default createProduct;
