import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
