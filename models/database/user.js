import mongoose from "mongoose";
import { consumptionSchema, pastConsumptionSchema } from "./consumption.js";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    consumption: {
      currentConsumption: consumptionSchema,
      pastConsumption: [pastConsumptionSchema],
    },
    map: {
      pins: [
        {
          pinId: {
            type: Schema.Types.ObjectId,
            ref: "MapPins",
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
