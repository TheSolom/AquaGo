import mongoose from "mongoose";

const { Schema } = mongoose;

const MapPinsSchema = new Schema(
  {
    title: {
      type: String,
      default: "Water Source",
    },
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

MapPinsSchema.index({ X_axis: 1, Y_axis: 1 });

export default mongoose.model("MapPins", MapPinsSchema);
