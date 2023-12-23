import Product from "../../models/Product.js";
import Appresponse from "../../helper/appResponse.js";

const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // default: 1, if no page is provided
    const limit = parseInt(req.query.limit) || 5; // limit: 5 product per page

    // Calculate skip value for MongoDB query
    const skip = (page - 1) * limit;

    // Fetch products with pagination
    const products = await Product.find().skip(skip).limit(limit);

    const totalProducts = await Product.countDocuments();

    const totalPages = Math.ceil(totalProducts / limit);

    // Create links for next and previous pages
    const nextPage =
      page < totalPages ? `/product?page=${page + 1}&limit=${limit}` : null;
    const prevPage =
      page > 1 ? `/product?page=${page - 1}&limit=${limit}` : null;

    return Appresponse(res, 200, "Product retrieved", {
      products,
      pagination: {
        page,
        limit,
        totalProducts,
        totalPages,
        nextPage,
        prevPage,
      },
    });
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err.message);
  }
};

export default getAllProducts;
