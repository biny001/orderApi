// Importing modules using ECMAScript Modules syntax
import express from "express";
import cors from "cors";
import { json } from "express";
import testRoute from "./routes/testRoute.js";
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN_NAME = process.env.DOMAIN_NAME || "localhost";

// Middleware
app.use(cors());
app.use(json());

// Routes

app.use("/api", testRoute);
app.use("/user", userRoute);
app.use("/order", orderRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
