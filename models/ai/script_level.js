import * as tf from "@tensorflow/tfjs";

async function loadModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water_Tasks/main/2.1%20Water%20level%20prediction/model/model.json"
    );
  } catch (err) {
    throw new Error("Model failed to load");
  }
}

export const make_prediction_level = async (data) => {
  try {
    const model = await loadModel();

    let req_input = [];
    for (const key in data) req_input.push(data[key]);

    const input = tf.tensor([[req_input]]);
    const output = model.predict(input);
    return output.dataSync()[0];
  } catch (err) {
    console.log(err);
  }
};
