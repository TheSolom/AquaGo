import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import waterRoutes from "./routes/ai/water.js";
import leakRoutes from "./routes/ai/leak.js";
import authRoutes from "./routes/auth.js";
import mapRoutes from "./routes/map.js";
import consumptionRoutes from "./routes/consumption.js";

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lftjs0p.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());

app.options("*", cors());
app.use(cors());

app.use(authRoutes);
app.use(consumptionRoutes);
app.use(mapRoutes);
app.use(leakRoutes);
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
