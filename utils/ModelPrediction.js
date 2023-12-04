import * as tf from "@tensorflow/tfjs-node";

export function makePrediction(model, data) {
  try {
    let req_input = [];
    for (const key in data) req_input.push(data[key]);

    const input = tf.tensor2d([req_input]);

    const output = model.predict(input);

    return output.dataSync();
  } catch (err) {
    throw err;
  }
}

export function makePredictionLevel(model, data) {
  try {
    let req_input = [];
    for (const key in data) req_input.push(data[key]);

    const input = tf.tensor(req_input, [1, 7, 1]);

    const output = model.predict(input);

    return output.dataSync();
  } catch (err) {
    throw err;
  }
}

export function makePredictionConsumption(model, data) {
  try {
    let req_input = [];
    for (const key in data) req_input.push(data[key]);

    const input = tf.tensor([[req_input]]);

    const output = model.predict(input);

    return output.dataSync();
  } catch (err) {
    throw err;
  }
}
