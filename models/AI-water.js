import * as tf from "@tensorflow/tfjs-node";

export async function loadLevelModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/2.1%20Water%20level%20prediction/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}
