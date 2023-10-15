import * as tf from "@tensorflow/tfjs-node";

async function loadModel() {
  try {
    return await tf.loadLayersModel(
      "https://raw.githubusercontent.com/TheSolom/Water_Tasks/main/3%20Predict%20Water%20Consumption/model/Tank%201/model.json"
    );
  } catch (err) {
    throw new Error("Model failed to load");
  }
}

export const make_prediction_consumptionTank = async (data) => {
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
