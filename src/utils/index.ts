export const mergeTo = (value, obj) => {
  if (isFalsy(value)) {
    return {};
  }

  return obj || {};
};

export function isFalsy(val, len?) {
  if (!val) {
    return true;
  }
  const isNumber = val.constructor.name == "Number";
  const isString = val.constructor.name == "String";

  if (isNumber) {
    return !val;
  } else if (isString) {
    if (len) {
      return val == "undefined" || val == "null" || val.length <= len;
    }
    return val == "undefined" || val == "null";
  }
  return false;
}
