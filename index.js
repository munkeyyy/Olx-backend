import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";
import subCategoryRouter from "./routers/subcategory.router";
import brandRouter from "./routers/brand.router";
import productRouter from "./routers/product.router";
import favRouter from "./routers/favourite.router";
const app = express();
app.use(express.json()); //body-parser (to read request body data)

app.use("/uploads", express.static("uploads"));
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://olx-clone-3op0stry4-munkeyyys-projects.vercel.app');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

const port = 8001;

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb+srv://monke_98:rohitkhatri98@olx.t1l116w.mongodb.net/OLX");
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

// Call the async function to connect to the database
connectToDatabase();
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use(process.env.URL_PREFIX + "users", userRouter);
app.use(process.env.URL_PREFIX + "categories", categoryRouter);
app.use(process.env.URL_PREFIX + "sub-categories", subCategoryRouter);
app.use(process.env.URL_PREFIX + "brands", brandRouter);
app.use(process.env.URL_PREFIX + "products", productRouter);
app.use(process.env.URL_PREFIX + "favourites", favRouter);
// app.use(productRouter)
