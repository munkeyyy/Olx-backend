import dotenv from "dotenv"
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import userRouter from "./routers/user.router";
import categoryRouter from"./routers/category.router";
import subCategoryRouter from "./routers/subcategory.router"
import brandRouter from "./routers/brand.router"
import productRouter from './routers/product.router'
import favRouter from "./routers/favourite.router"
const app = express();
app.use(express.json()) //body-parser (to read request body data)

app.use('/uploads', express.static('uploads'))
app.use(cors())

const port = 8001;

mongoose
  .connect("mongodb://127.0.0.1/OLX")
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use(process.env.URL_PREFIX+"users", userRouter);
app.use(process.env.URL_PREFIX+"categories",categoryRouter);
app.use(process.env.URL_PREFIX+"sub-categories",subCategoryRouter);
app.use(process.env.URL_PREFIX+"brands",brandRouter);
app.use(process.env.URL_PREFIX+"products",productRouter)
app.use(process.env.URL_PREFIX+"favourites",favRouter)
// app.use(productRouter)

