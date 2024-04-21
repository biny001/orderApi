import express from "express";
import connectDB from "../database/config.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await connectDB();
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log("error");
  }
});
router.post("/", async (req, res) => {
  try {
    await connectDB();
    const { username, email } = req.body;
    console.log("username", username);
    console.log("email", email);

    if (!username || !email) {
      return res.status(400).json({ error: "username and email required" });
    }

    //create a new user

    const newUser = new User({ username, email });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
