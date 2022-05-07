export const isObject = (target) => {
  return Object.prototype.toString.call(target) === "[object Object]";
};
export const isString = (target) => {
  return Object.prototype.toString.call(target) === "[object String]";
};
export const isArray = (target) => {
  return Object.prototype.toString.call(target) === "[object Array]";
};
export const isBoolean = (target) => {
  return Object.prototype.toString.call(target) === "[object Boolean]";
};
export const isNumber = (target) => {
  return Object.prototype.toString.call(target) === "[object Number]";
};
