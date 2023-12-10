const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');


//@desc create a product
//@method POST
//@route '/api/products'

const createProduct = asyncHandler(async (req, res) => {
    const { name, image, price } = req.body;
    //create new post object
    if (!name.length || !image.length || !price) {
        res.status(400).send({
            error: 'fill in all required fields'
        })
    }

    try {
        const products = new Product({
            name,
            image,
            price
        })
        //save post
        await products.save();
        //return success
        res.status(200).json({ message: "Product created successfully", products });
    } catch (error) {
        res.status(500).send({ error: "Error creating product", error })
    }
});

//@desc fetch a product
//@method GET
//@route '/api/products'

const getProducts = asyncHandler(async (req, res) => {
    console.log("Request body", req.body)
    const products = await Product.find();
    res.status(200).json(products);
});

//@desc update a product
//@method PUT
//@route '/api/products/:id'

const updateProduct = asyncHandler(async (req, res) => {
    try {
        //find post
        const product = await Product.findById(req.params.id);
        if (req.body.name) {
            product.name = req.body.name;
        }
        if (req.body.image) {
            product.image = req.body.image;
        }
        if (req.body.price) {
            product.price = req.body.price;
        }
        //save post 
        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Error updating product" });
    }
});

//@desc delete a product
//@method DELETE
//@route '/api/products/:id'

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        //find product
        const product = await Product.findById(req.params.id);
        //delete product
        await Product.deleteOne({ _id: product._id });

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting product" })
    }
});

//@desc fetches a specific product by id
//@method GET
//@route '/api/products/:id'

const searchProduct = asyncHandler(async (req, res) => {

    try {
        const products = await Product.find({name: req.params.id});
        res.status(200).json({ message: "Product found", postData: products });
    } catch (error) {
        res.status(500).json({ error: "Product not found" });
    }



});

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, searchProduct }