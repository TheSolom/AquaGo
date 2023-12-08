import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";

import authRoutes from "./routes/auth.js";
import mapRoutes from "./routes/map.js";
import consumptionRoutes from "./routes/consumption.js";
import leakRoutes from "./routes/AI-leak.js";
import waterRoutes from "./routes/AI-water.js";

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lftjs0p.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());

app.options("*", cors());
app.use(cors());

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
else app.use(morgan("combined"));

app.use(authRoutes);
app.use(mapRoutes);
app.use(consumptionRoutes);
app.use("/leak", leakRoutes);
app.use(waterRoutes);

app.use((error, req, res, next) => {
  console.log(error);

  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));
