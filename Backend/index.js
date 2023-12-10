const express = require("express")
const dotenv = require('dotenv')
const routes = require('./routes')
const cors = require('cors')
const { connectDb } = require("./config/db")
dotenv.config()
const port = process.env.PORT | 8088;

connectDb();

//create express app
const app = express();
//add middleware
app.use(cors())
app.use(express.json());

//use routes
app.use('/api', routes);

app.use('/api/product', require('./routes/product'));

//listen to port 
app.listen(port, () => {
    console.log(`server is runnning on port: ${port}`);
});
