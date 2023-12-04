import mongoose from "mongoose";

const { Schema } = mongoose;

export const consumptionSchema = new Schema(
  {
    consumptionValue: {
      type: Number,
      required: true,
      default: 0,
    },
    consumptionGoal: {
      type: Number,
      default: -1,
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
