import express from "express";

import Property from "../models/Property.js";
import connectDB from "../database/config.js";

const router = express.Router();

// GET /api/owners

router.get("/", async (req, res) => {
  try {
    await connectDB();
    const property = await Property.find({});
    res.status(200).json(property);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

// router.post("/", async (req, res) => {
//   try {
//     await connectDB();
//     const { firstName, lastName } = req.body;
//     const owner = new owner({ firstName, lastName });
//     await owner.save();
//     res.status(201).json(owner);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Something went wrong");
//   }
// });
export default router;
