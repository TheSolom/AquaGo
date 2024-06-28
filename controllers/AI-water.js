import { loadLevelModel } from "../models/AI-water.js";
import {
  makePredictionLevel,
} from "../utils/ModelPrediction.js";
import { checkModelInput } from "../utils/CheckModelInput.js";

export const postLevel = async (req, res, next) => {
  try {
    checkModelInput(req.body);

    const model = await loadLevelModel();

    const prediction = makePredictionLevel(model, req.body);

    res.status(200).json({ output: prediction[0] });
  } catch (error) {
    next(error);
  }
};
