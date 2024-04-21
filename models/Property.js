import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

// Define the schema for the Property collection
const propertySchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  square_feet: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  rates: {
    weekly: {
      type: Number,
      required: true,
    },
    monthly: {
      type: Number,
      required: true,
    },
  },
  seller_info: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  images: {
    type: [String],
    required: true,
  },
  is_featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model based on the property schema

const Property = models.Property || model("Property", propertySchema);

export default Property;
