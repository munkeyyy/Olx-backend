import dotenv from "dotenv"
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import userRouter from "./routers/user.router";
import categoryRouter from"./routers/category.router";
import productRouter from './routers/product.router'
const app = express();
app.use(express.json()) //body-parser (to read request body data)

app.use('/uploads', express.static('uploads'))


const port = 8001;

mongoose
  .connect("mongodb://localhost:27017/OLX")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories",categoryRouter);
// app.use("/api/v1/products",productRouter)

