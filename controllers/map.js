import MapPins from "../models/map-pins.js";

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
    const { title, X_axis, Y_axis } = req.body;
    const { userId } = req;

    await MapPins.create({ title, X_axis, Y_axis, userId });

    res.status(201).json({ message: "Pin added successfully" });
  } catch (err) {
    next(new Error("Couldn't add map pin"));
  }
};

export const deleteMyPins = async (req, res, next) => {
  try {
    const { userId } = req;

    await MapPins.deleteMany({ userId });

    res.status(201).json({ message: "All your pins deleted successfully" });
  } catch (err) {
    next(new Error("Couldn't delete your all map pins"));
  }
};

export const deleteMyPin = async (req, res, next) => {
  try {
    const { X_axis, Y_axis } = req.params;
    const { userId } = req;

    const pin = await MapPins.findOne({ X_axis, Y_axis });
    if (pin.userId.toString() !== userId) {
      const error = new Error("Couldn't delete other user's pin");
      error.statusCode = 403;
      next(error);
    }
    await pin.deleteOne();

    res.status(201).json({ message: "The pin deleted successfully" });
  } catch (err) {
    next(new Error("Couldn't delete map pin"));
  }
};
