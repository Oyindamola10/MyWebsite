import express from "express";
import createContact from "../controllers/Contact/create-contact.js";

const router = express.Router();

router.post("/reach-me", createContact);

export default router;
