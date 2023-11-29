import mongoose from "mongoose";

const { Schema } = mongoose;

export const consumptionSchema = new Schema(
  {
    currentConsumption: {
      type: Number,
      required: true,
    },
    goalConsumption: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const pastConsumptionSchema = new Schema({
  consumptionValue: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
