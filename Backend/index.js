const express = require("express")

const mongoose = require("mongoose")

const routes = require('./routes')
const cors = require('cors')

const port = 8088;
const dbUrl ="mongodb+srv://samiatadegbenro:Ajike0405@cluster0.si0nhde.mongodb.net/?retryWrites=true&w=majority"

mongoose
       .connect(dbUrl, {useNewUrlParser: true})
       .then(() => {
          console.log("Datbase connected");
         //create express app
            const app = express();

            //add middleware
            app.use(cors())
            app.use(express.json());

           //use routes
           app.use('/api', routes);
           
            //listen to port 
            app.listen(port, () => {
                console.log(`server is runnning on port: ${port}`);
            });
       })