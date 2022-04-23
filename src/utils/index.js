export const isObject = (target) => {
  return Object.prototype.toString.call(target) === "[object Object]";
};
export const isString = (target) => {
  return Object.prototype.toString.call(target) === "[object String]";
};
