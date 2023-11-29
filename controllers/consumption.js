import User from "../models/database/user.js";

export const getMyConsumption = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    
    res.status(200).json({ consumption: user.consumption });
  } catch (err) {
    next(new Error("Couldn't get my consumption"));
  }
};

export const postMyConsumption = async (req, res, next) => {
  try {
    const { consumption, goal } = req.body;
    const { userId } = req;

    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    if (!user.consumption) {
      user.consumption = {};
    }

    if (!user.consumption.currentConsumption) {
      user.consumption.currentConsumption = {};
    }

    user.consumption.currentConsumption.currentConsumption = consumption;
    if (goal) user.consumption.currentConsumption.goalConsumption = goal;
    user.consumption.pastConsumption.push({
      consumptionValue: consumption,
    });

    await user.save();

    return res.status(201).json({ message: "Consumption added successfully" });
  } catch (err) {
    console.error(err);
    next(new Error("Couldn't add consumption"));
  }
};
