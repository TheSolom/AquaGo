import * as tf from "@tensorflow/tfjs-node";

async function loadModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water-AI-Models/main/4.2%20water_treatment/model/model.json"
    );
  } catch (err) {
    throw err;
  }
}

export const make_prediction_treatment = async (data) => {
  try {
    const model = await loadModel();

    let req_input = [];
    for (const key in data) req_input.push(data[key]);

    const input = tf.tensor2d([req_input]);
    const output = model.predict(input);
    return output.dataSync()[0];
  } catch (err) {
    console.log(err);
  }
};
