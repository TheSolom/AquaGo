import Consumption from "../models/database/consumption.js";

export const getAllConsumption = async (req, res, next) => {
  try {
    const consumption = await Consumption.find();
    res.status(200).json({ consumption });
  } catch (err) {
    next(new Error("Couldn't get all consumption"));
  }
};

export const getMyConsumption = async (req, res, next) => {
  try {
    const consumption = await Consumption.find({ userId: req.userId });
    res.status(200).json({ consumption });
  } catch (err) {
    next(new Error("Couldn't get my consumption"));
  }
};

export const putMyConsumption = async (req, res, next) => {
  try {
    const { current_consumption, max_consumption } = req.body;
    const { userId } = req;

    await Consumption.create({ current_consumption, max_consumption, userId });

    res.status(201).json({ message: "Consumption added successfully" });
  } catch (err) {
    next(new Error("Couldn't add consumption"));
  }
};
