/* const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProduct,
  addMutiples,
  createCart,
  getCart,
} = require("../controllers/productsController");

const router = require("express").Router();

router.post("/", createProduct);
router.post("/multiples", addMutiples);
router.post("/", createCart);
router.get("/", getCart);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", searchProduct);

module.exports = router; */

// Note this route will be a protected route

import express from "express";
import createProduct from "../controllers/Product/create-product.js";
import addMultipleProduct from "../controllers/Product/add-multiple-product.js";
import deleteProduct from "../controllers/Product/delete-product.js";
import updateProduct from "../controllers/Product/update-product.js";
import getProductById from "../controllers/Product/get-product-by-id.js";
import getAllProducts from "../controllers/Product/get-all-products.js";
import searchProduct from "../controllers/Product/search-product.js";

const router = express.Router();

router.post("/new-product", createProduct);
router.post("/new-multiple-product", addMultipleProduct);

router.get("/", getAllProducts);
router.get("/find/:productId", getProductById);
router.get("/search", searchProduct);

router.patch("/update/:productId", updateProduct);
router.delete("/delete/:productId", deleteProduct);

export default router;
