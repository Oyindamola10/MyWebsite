import Product from "../../models/Product.js";
import Appresponse from "../../helper/appResponse.js";

const searchProduct = async (req, res) => {
  const searchQuery = req.query.name || "";
  try {
    const searchFilter = {
      name: { $regex: searchQuery, $options: "i" },
    };

    const products = await Product.find(searchFilter);

    return Appresponse(res, 200, "Product retrieved", products);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err.message);
  }
};

export default searchProduct;
