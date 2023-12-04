export function getMaxValueIndex(obj) {
  let maxKey = null, maxValue = -Infinity;

  for (const key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return Number(maxKey);
}
