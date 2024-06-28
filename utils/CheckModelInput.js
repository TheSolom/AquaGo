export function checkModelInput(data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      switch (key) {
        case "hour":
          validateNumber(key, data[key], 0, 23);
          break;
        case "dayofweek":
          validateNumber(key, data[key], 1, 7);
          break;
        case "quarter":
          validateNumber(key, data[key], 1, 4);
          break;
        case "month":
          validateNumber(key, data[key], 1, 12);
          break;
        case "year":
          validateNumber(key, data[key], 0, Infinity);
          break;
        case "dayofyear":
          validateNumber(key, data[key], 1, 366);
          break;
        case "dayofmonth":
          validateNumber(key, data[key], 1, 31);
          break;
        default:
          validateNumber(key, data[key]);
      }
    }
  }
}

function validateNumber(key, value, min, max) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Field ${key} must be a number.`);
  } else if (value < min || value > max) {
    throw new Error(`Field ${key} must be a number between ${min} and ${max}.`);
  }
}
