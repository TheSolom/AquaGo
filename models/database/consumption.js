import mongoose from "mongoose";

const { Schema } = mongoose;

export const consumptionSchema = new Schema(
  {
    consumptionValue: {
      type: Number,
      required: true,
    },
    consumptionGoal: {
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
