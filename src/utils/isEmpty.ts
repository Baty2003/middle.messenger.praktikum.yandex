export function isEmpty(value: unknown) {
  if (typeof value === "string") return !(value.length > 1);
  else if (typeof value !== "object") return true;
  else if (value == null) return true;
  else if (typeof value === "object") return checkTypesObject(value);
  else return false;
}

function checkTypesObject(value: unknown) {
  if (Array.isArray(value)) return checkArray(value);
  else if (value instanceof Map) return checkMap(value);
  else if (value instanceof Set) return checkSet(value);
  else if (value instanceof Object) return checkObject(value);
  else return true;
}

function checkObject(value: {}) {
  return !(Object.values(value).length > 0);
}
function checkMap(value: Map<any, any>) {
  return !([...value.values()].length > 0);
}
function checkSet(value: Set<any>) {
  return !([...value.entries()].length > 0);
}
function checkArray(value: Array<any>) {
  return !(value.length > 0);
}
