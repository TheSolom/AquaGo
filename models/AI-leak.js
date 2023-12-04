import * as tf from "@tensorflow/tfjs-node";

export async function loadAccBranchedModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.2%20Water%20leaks%20Detection/Acc/Branched/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}
export async function loadAccLoopedModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.2%20Water%20leaks%20Detection/Acc/Looped/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}

export async function loadHydroBranchedModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.2%20Water%20leaks%20Detection/Hydrophone/Branched/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}
export async function loadHydroLoopedModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.2%20Water%20leaks%20Detection/Hydrophone/Looped/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}

export async function loadPressBranchedModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.2%20Water%20leaks%20Detection/Pressure/Branched/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}
export async function loadPressLoopedModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.2%20Water%20leaks%20Detection/Pressure/Looped/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}
