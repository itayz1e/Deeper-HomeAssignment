require('dotenv').config()
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import webCardRouter from "./API/web/webCardRouter";


const app = express();
dotenv.config();
app.use(express.json());

const uri: string | undefined = process.env.MONGODB_URI;
if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

//static file
app.use(express.static("./client"));
app.use('/api/web', webCardRouter)

app.listen(3000, () => {
  console.log("server listen on port 3000");
});

