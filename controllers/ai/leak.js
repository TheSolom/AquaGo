import { make_prediction_accBranched } from "../../models/ai/script_AccelerometerBranched.js";
import { make_prediction_accLooped } from "../../models/ai/script_AccelerometerLooped.js";
import { make_prediction_hydBranched } from "../../models/ai/script_HydrophoneBranched.js";
import { make_prediction_hydLooped } from "../../models/ai/script_HydrophoneLooped.js";
import { make_prediction_pressureBranched } from "../../models/ai/script_PressureBranched.js";
import { make_prediction_pressureLooped } from "../../models/ai/script_PressureLooped.js";

export const postAccBranched = async (req, res, next) => {
  const output = await make_prediction_accBranched(req.body);
  res.status(200).json({ output });
};
export const postAccLooped = async (req, res, next) => {
  const output = await make_prediction_accLooped(req.body);
  res.status(200).json({ output });
};

export const postHydrophoneBranched = async (req, res, next) => {
  const output = await make_prediction_hydBranched(req.body);
  res.status(200).json({ output });
};
export const postHydrophoneLooped = async (req, res, next) => {
  const output = await make_prediction_hydLooped(req.body);
  res.status(200).json({ output });
};

export const postPressureBranched = async (req, res, next) => {
  const output = await make_prediction_pressureBranched(req.body);
  res.status(200).json({ output });
};
export const postPressureLooped = async (req, res, next) => {
  const output = await make_prediction_pressureLooped(req.body);
  res.status(200).json({ output });
};
