import { make_prediction_portability } from "../../models/ai/script_portability.js";
import { make_prediction_level } from "../../models/ai/script_level.js";
import { make_prediction_consumptionTank } from "../../models/ai/script_ConsumptionTank.js";
import { make_prediction_treatment } from "../../models/ai/script_treatment.js";

export const postPortability = async (req, res, next) => {
  const output = await make_prediction_portability(req.body);
  res.status(200).json({ output });
};

export const postLevel = async (req, res, next) => {
  const output = await make_prediction_level(req.body);
  res.status(200).json({ output });
};

export const postTreatment = async (req, res, next) => {
  const output = await make_prediction_treatment(req.body);
  res.status(200).json({ output });
};

export const postConsumptionTank = async (req, res, next) => {
  const output = await make_prediction_consumptionTank(req.body);
  res.status(200).json({ output });
};
