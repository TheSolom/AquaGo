import {
  loadPotabilityModel,
  loadLevelModel,
  loadQualityModel,
  loadConsumptionModel,
} from "../models/AI-water.js";
import {
  makePrediction,
  makePredictionConsumption,
  makePredictionLevel,
} from "../utils/ModelPrediction.js";

export const postPortability = async (req, res, next) => {
  const model = await loadPotabilityModel();

  const prediction = makePrediction(model, req.body);

  res.status(200).json({ output: prediction[0] });
};

export const postLevel = async (req, res, next) => {
  const model = await loadLevelModel();

  const prediction = makePredictionLevel(model, req.body);

  res.status(200).json({ output: prediction[0] });
};

export const postQuality = async (req, res, next) => {
  const model = await loadQualityModel();

  const prediction = makePrediction(model, req.body);

  res.status(200).json({ output: prediction[0] });
};

export const postConsumptionTank = async (req, res, next) => {
  const model = await loadConsumptionModel();

  const prediction = makePredictionConsumption(model, req.body);

  res.status(200).json({ output: prediction[0] });
};
