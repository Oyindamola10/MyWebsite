const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected');
    } catch (error) {
        console.log('an error occured while trying to connect to db', error);
    }


}


module.exports = { connectDb }