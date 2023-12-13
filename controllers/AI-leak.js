import {
  loadAccBranchedModel,
  loadAccLoopedModel,
  loadHydroBranchedModel,
  loadHydroLoopedModel,
  loadPressBranchedModel,
  loadPressLoopedModel,
} from "../models/AI-leak.js";
import { makePrediction } from "../utils/ModelPrediction.js";
import { getMaxValueIndex } from "../utils/MaxValueIndex.js";
import { checkModelInput } from "../utils/CheckModelInput.js";

export const postAccBranched = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadAccBranchedModel();

  const prediction = makePrediction(model, req.body);

  const leakIndex = getMaxValueIndex(prediction);

  let leakType;
  switch (leakIndex) {
    case 0:
      leakType = "Circumferential Crack";
      break;
    case 1:
      leakType = "Longitudinal Crack";
      break;
    case 2:
      leakType = "Gasket Leak";
      break;
    case 3:
      leakType = "NonLeak";
      break;
    case 4:
      leakType = "Orifice Leak";
      break;
    default:
      leakType = "Invalid index";
  }

  res.status(200).json({ leakType });
};
export const postAccLooped = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadAccLoopedModel();

  const prediction = makePrediction(model, req.body);

  const leakIndex = getMaxValueIndex(prediction);

  let leakType;
  switch (leakIndex) {
    case 0:
      leakType = "Orifice Leak";
      break;
    case 1:
      leakType = "Longitudinal Crack";
      break;
    case 2:
      leakType = "Gasket Leak";
      break;
    case 3:
      leakType = "Circumferential Crack";
      break;
    case 4:
      leakType = "NonLeak";
      break;
    default:
      leakType = "Invalid index";
  }

  res.status(200).json({ leakType });
};

export const postHydrophoneBranched = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadHydroBranchedModel();

  const prediction = makePrediction(model, req.body);

  const leakIndex = getMaxValueIndex(prediction);

  let leakType;
  switch (leakIndex) {
    case 0:
      leakType = "Circumferential Crack";
      break;
    case 1:
      leakType = "Gasket Leak";
      break;
    case 2:
      leakType = "Longitudinal Crack";
      break;
    case 3:
      leakType = "NonLeak";
      break;
    case 4:
      leakType = "Orifice Leak";
      break;
    default:
      leakType = "Invalid index";
  }

  res.status(200).json({ leakType });
};
export const postHydrophoneLooped = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadHydroLoopedModel();

  const prediction = makePrediction(model, req.body);

  const leakIndex = getMaxValueIndex(prediction);

  let leakType;
  switch (leakIndex) {
    case 0:
      leakType = "Circumferential Crack";
      break;
    case 1:
      leakType = "Gasket Leak";
      break;
    case 2:
      leakType = "Longitudinal Crack";
      break;
    case 3:
      leakType = "NonLeak";
      break;
    case 4:
      leakType = "Orifice Leak";
      break;
    default:
      leakType = "Invalid index";
  }

  res.status(200).json({ leakType });
};

export const postPressureBranched = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadPressBranchedModel();

  const prediction = makePrediction(model, req.body);

  const leakIndex = getMaxValueIndex(prediction);

  let leakType;
  switch (leakIndex) {
    case 0:
      leakType = "Gasket Leak";
      break;
    case 1:
      leakType = "NonLeak";
      break;
    case 2:
      leakType = "Circumferential Crack";
      break;
    case 3:
      leakType = "Orifice Leak";
      break;
    case 4:
      leakType = "Longitudinal Crack";
      break;
    default:
      leakType = "Invalid index";
  }

  res.status(200).json({ leakType });
};
export const postPressureLooped = async (req, res, next) => {
  try {
    checkModelInput(req.body);
  } catch (error) {
    return next(error);
  }

  const model = await loadPressLoopedModel();

  const prediction = makePrediction(model, req.body);

  const leakIndex = getMaxValueIndex(prediction);

  let leakType;
  switch (leakIndex) {
    case 0:
      leakType = "Gasket Leak";
      break;
    case 1:
      leakType = "Longitudinal Crack";
      break;
    case 2:
      leakType = "NonLeak";
      break;
    case 3:
      leakType = "Orifice Leak";
      break;
    case 4:
      leakType = "Circumferential Crack";
      break;
    default:
      leakType = "Invalid index";
  }

  res.status(200).json({ leakType });
};
