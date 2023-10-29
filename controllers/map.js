import MapPins from "../models/database/map_pins.js";

export const getAllPins = async (req, res, next) => {
  try {
    const pins = await MapPins.find();
    res.status(200).json({ pins });
  } catch (err) {
    next(new Error("Couldn't get map pins"));
  }
};

export const getMyPins = async (req, res, next) => {
  try {
    const pins = await MapPins.find({ userId: req.userId });
    res.status(200).json({ pins });
  } catch (err) {
    next(new Error("Couldn't get my map pins"));
  }
};

export const postMyPins = async (req, res, next) => {
  try {
    const { X_axis, Y_axis } = req.body;
    const { userId } = req;

    await MapPins.create({ X_axis, Y_axis, userId });

    res.status(201).json({ message: "Pin added successfully" });
  } catch (err) {
    next(new Error("Couldn't add map pin"));
  }
};
