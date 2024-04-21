import express from "express";
import connectDB from "../database/config.js";
import User from "../models/User.js";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    await connectDB();
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    console.log("error");
  }
});
router.post("/", async (req, res) => {
  try {
    await connectDB();
    const order = await req.body;
    console.log("order", order);

    const user = await User.findById(order?.user);
    if (!user) {
      throw new Error("User not found");
    }

    const newOrder = new Order({
      ...order,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
