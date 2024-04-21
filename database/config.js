// src/database/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const uri = process.env.MONGODB_URI;

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(uri);

    const database = mongoose.connection;

    database.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    database.once("open", () => {
      console.log("MongoDB connected successfully");
    });

    isConnected = true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Exit the process if unable to connect to MongoDB
    process.exit(1);
  }
};

export default connectDB;
