const express = require("express");
// import post model
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Login = require("./models/Login");
const SignUp = require("./models/SignUp");
const Contact = require("./models/Contact");
const router = express.Router();

//get all cart api endpoint
router.get("/cart", async (req, res) => {
  console.log("Request body", req.body);
  const cart = await Cart.find();
  res.status(200).json(cart);
});
//get all contact api endpoint
router.get("/contact", async (req, res) => {
  console.log("Request body", req.body);
  const contact = await Contact.find();
  res.status(200).json(contact);
});

//Cart end point
router.post("/cart", async (req, res) => {
  //destructure request body
  const { name, image, price } = req.body;
  //create new post object
  const cart = new Cart({
    name,
    price,
    image,
  });

  //save post
  await cart.save();

  //handle error
  if (!cart) {
    res.status(500).json({ error: "Error creating product" });
  }

  //return success
  res.status(200).json({ message: "Cart created successfully", cart });
});

//get cart data
router.get("/cart/:id", async (req, res) => {
  //find post
  const cart = await Cart.find(req.params.id);

  //handle error
  if (!cart) {
    res.status(500).json({ error: "Cart not found" });
  }
  res.status(200).json({ message: "Cart found", postData: Cart });
});

//update signup
router.put("/signUp/:id", async (req, res) => {
  try {
    //find signUp
    const signUp = await SignUp.findById(req.params.id);
    if (req.body.fullname) {
      signUp.fullname = req.body.fullname;
    }
    if (req.body.username) {
      signUp.username = req.body.username;
    }
    if (req.body.email) {
      signUp.email = req.body.email;
    }
    if (req.body.phone) {
      signUp.phone = req.body.phone;
    }
    if (req.body.password) {
      signUp.password = req.body.password;
    }
    if (req.body.confirmPassword) {
      signUp.confirmPassword = req.body.confirmPassword;
    }
    //save post
    await signUp.save();
    res.status(200).json({ message: "Sign up updated successfully", signUp });
  } catch (error) {
    res.status(500).json({ error: "Error updating signUp" });
  }
});

// export router
module.exports = router;
