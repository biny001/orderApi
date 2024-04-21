import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

// Define the schema for the Order collection
const itemSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
  images: [{ type: String }],
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

// Define order schema
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  cart: [itemSchema], // Array of items using the itemSchema
  orderTime: { type: Date, default: Date.now },
});

// Create a Mongoose model based on the Order schema

const Order = models.Order || model("Order", orderSchema);

export default Order;
