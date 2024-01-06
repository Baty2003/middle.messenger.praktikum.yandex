export function range(start: number, end?: number, step = start > 0 ? 1 : -1) {
  const length = Math.abs(end ? (end - start) / step : start);
  const initValueFor = end ? start : 0;
  const result = [];
  for (let i = initValueFor; result.length < length; i += step) {
    result.push(i);
  }
  return result;
}
