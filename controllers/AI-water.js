import { loadPotabilityModel, loadLevelModel } from "../models/AI-water.js";
import {
  makePrediction,
  makePredictionLevel,
} from "../utils/ModelPrediction.js";
import { checkModelInput } from "../utils/CheckModelInput.js";

export const postPortability = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadPotabilityModel();

  const prediction = makePrediction(model, req.body);

  res.status(200).json({ output: prediction[0] });
};

export const postLevel = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadLevelModel();

  const prediction = makePredictionLevel(model, req.body);

  res.status(200).json({ output: prediction[0] });
};
