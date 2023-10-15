import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import leakRoutes from "./routes/ai/leak.js";
import waterRoutes from "./routes/ai/water.js";

// const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.u98uice.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.options("*", cors());
app.use(cors());

app.use(leakRoutes);
app.use(waterRoutes);

app.use((error, req, res, next) => {
  console.log(error);

  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message });
});

// mongoose
  // .connect(MONGODB_URI)
  // .then(() => {
    app.listen(process.env.PORT || 3000);
  // })
  // .catch((err) => console.log(err));
