import mongoose from "mongoose";
const Schema = mongoose.Schema;

const consumptionSchema = new Schema(
  {
    current_consumption: {
      type: Number,
      required: true,
    },
    max_consumption: {
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Consumption", consumptionSchema);
