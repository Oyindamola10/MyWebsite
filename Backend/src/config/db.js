import { connect } from "mongoose";

const isLocal = process.env.NODE_ENV === "Develop";
const DATABASE_URI = isLocal
  ? process.env.LOCAL_DATABASE_URI
  : process.env.MONGODB_URI;

async function connectDB() {
  try {
    await connect(DATABASE_URI);
    console.info("Connected to mongoDB cluster");
  } catch (err) {
    console.error("An error occured connecting to mongoDB cluster", err);
    process.exit(1);
  }
}

export default connectDB;
