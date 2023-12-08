const express = require('express');
// import post model 
const Product = require('./models/Product');
const Cart = require ('./models/Cart')
const Login = require('./models/Login')
const SignUp = require('./models/SignUp')
const Contact = require('./models/Contact')
const router = express.Router();

//get all product api endpoint 
router.get('/product', async (req,res) =>{
    console.log("Request body", req.body)
    const products = await Product.find();
    res.status(200).json(products);
})
//get all cart api endpoint
router.get('/cart', async (req,res) =>{
    console.log("Request body", req.body)
    const cart = await Cart.find();
    res.status(200).json(cart);
})
//get all contact api endpoint
router.get('/contact', async (req,res) =>{
    console.log("Request body", req.body)
    const contact = await Contact.find();
    res.status(200).json(contact);
})
//get all login api endpoint
router.get('/login', async (req,res) =>{
    console.log("Request body", req.body)
    const login = await Login.find();
    res.status(200).json(login);
})
//get all signUp api endpoint
router.get('/signUp', async (req,res) =>{
    console.log("Request body", req.body)
    const signUp= await SignUp.find();
    res.status(200).json(signUp);
})
//create a new product api endpoint 
router.post('/product', async (req,res) => {
    //destructure request body
    const {name,image,price} = req.body;
     //create new post object
     const products = new Product({
        name,
        image,
        price
    })

    //save post
    await products.save();

    //handle error 
    if (!products){
        res.status(500).json({error: "Error creating product"})
    }

    //return success
    res.status(200).json({ message: "Product created successfully", products});
})
//create a new login api endpoint 
router.post('/login', async (req,res) => {
    //destructure request body
    const {username, password} = req.body;
     //create new post object
     const login = new Login({
        username,
        password
    })

    //save post
    await login.save();

    //handle error 
    if (!login){
        res.status(500).json({error: "Error logging in"})
    }

    //return success
    res.status(200).json({ message: "logged in successfully", login});
})
//create a new contact api endpoint 
router.post('/contact', async (req,res) => {
    //destructure request body
    const {name,email,phone,subject,message} = req.body;
     //create new post object
     const contact = new Contact({
        name,
        email,
        phone,
        subject,
        message
    })

    //save post
    await contact.save();

    //handle error 
    if (!contact){
        res.status(500).json({error: "Error contacting us"})
    }

    //return success
    res.status(200).json({ message: "contacted us successfully", contact});
})
//create a new login api endpoint 
router.post('/login', async (req,res) => {
    //destructure request body
    const {username, password} = req.body;
     //create new post object
     const login = new Login({
        username,
        password
    })

    //save post
    await login.save();

    //handle error 
    if (!login){
        res.status(500).json({error: "Error logging in"})
    }

    //return success
    res.status(200).json({ message: "logged in successfully", login});
})

//create a new signUp api endpoint 
router.post('/signUp', async (req,res) => {
    //destructure request body
    const {fullname,username,phone,password,confirmPassword} = req.body;
     //create new post object
     const signUp = new SignUp({
        fullname,
        username,
        phone,
        password,
        confirmPassword
    })

    //save post
    await signUp.save();

    //handle error 
    if (!signUp){
        res.status(500).json({error: "Error Signing Up"})
    }

    //return success
    res.status(200).json({ message: "Signed up successfully", signUp});
})
//Cart end point
 router.post('/cart', async (req,res) => {
    //destructure request body
    const {product_id} = req.body;
     //create new post object
     const cart = new Cart({
      product_id
    })

    //save post
    await cart.save();

    //handle error 
    if (!cart){
        res.status(500).json({error: "Error creating product"})
    }

    //return success
    res.status(200).json({ message: "Cart created successfully", cart});
})

//get product data
router.get('/product/:id', async(req,res)=>{
   //find post
   const products = await Product.findById(req.params.id);

   //handle error
   if (!products) {
    res.status(500).json({error: "Product not found"});
   }
   res.status(200).json({message : "Product found", postData: Product});
})
//get cart data
router.get('/cart/:id', async(req,res)=>{
   //find post
   const cart = await Cart.findById(req.params.id);

   //handle error
   if (!cart) {
    res.status(500).json({error: "Cart not found"});
   }
   res.status(200).json({message : "Cart found", postData: Cart});
})
//get signUp data
router.get('/signUp/:id', async(req,res)=>{
   //find post
   const signUp = await SignUp.findById(req.params.id);

   //handle error
   if (!signUp) {
    res.status(500).json({error: "SignUp  failed"});
   }
   res.status(200).json({message : "sign up successful", postData: SignUp});
})
//get login data
router.get('/login/:id', async(req,res)=>{
   //find post
   const login = await Login.findById(req.params.id);

   //handle error
   if (!login) {
    res.status(500).json({error: "login failed"});
   }
   res.status(200).json({message : "log insuccessful", postData: Login});
})

//update product
router.put('/product/:id', async (req, res)=>{
    try{
        //find post
        const product = await Product.findById(req.params.id);
        if (req.body.name){
            product.name= req.body.name;
        }
        if (req.body.image){
            product.image = req.body.image;
        }
        if (req.body.price){
            product.price = req.body.price;
        }
        //save post 
        await product.save();
        res.status(200).json({message: "Product updated successfully", product});
    } catch (error){
        res.status(500).json({error: "Error updating product"});
    }
});
//update signup
router.put('/signUp/:id', async (req, res)=>{
    try{
        //find signUp
        const signUp = await SignUp.findById(req.params.id);
        if (req.body.fullname){
            signUp.fullname= req.body.fullname;
        }
        if (req.body.username){
            signUp.username = req.body.username;
        }
        if (req.body.email){
            signUp.email = req.body.email;
        }
        if (req.body.phone){
            signUp.phone= req.body.phone;
        }
        if (req.body.password){
            signUp.password = req.body.password;
        }
        if (req.body.confirmPassword){
            signUp.confirmPassword = req.body.confirmPassword;
        }
        //save post 
        await signUp.save();
        res.status(200).json({message: "Sign up updated successfully", signUp});
    } catch (error){
        res.status(500).json({error: "Error updating signUp"});
    }
});
// delete product
   router.delete('/product/:id', async(req,res) =>{
    try{
        //find product
        const product = await Product.findById(req.params.id);
        //delete product
        await product.delete();

        res.status(200).json({ message: "Product deleted successfully"});
    }catch (error){
        res.status(500).json({ error: "Error deleting product"})
    }
   })

// export router
module.exports = router;
