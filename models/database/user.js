import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    consumption_id: {
      type: Schema.Types.ObjectId,
      ref: "Consumption",
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
