import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import Appresponse from "./helper/appResponse.js";
dotenv.config();

// Routes
import AuthRoute from "./routes/auth.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//use routes
app.use("/api/auth", AuthRoute);

// Default route
app.get("/", (_req, res) => {
  return Appresponse(res, 200, "Delah Backend API");
});

// Catch-all 404 route
app.use("*", (_req, res) => {
  return Appresponse(
    res,
    404,
    "The specified end-point does not exist. Check request method or route and try again."
  );
});

export default app;
