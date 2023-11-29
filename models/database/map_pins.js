import mongoose from "mongoose";

const { Schema } = mongoose;

const MapPinsSchema = new Schema(
  {
    X_axis: {
      type: Number,
      required: true,
    },
    Y_axis: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("MapPins", MapPinsSchema);
