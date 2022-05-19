const isObject = (target) => {
  return Object.prototype.toString.call(target) === "[object Object]";
};
const isString = (target) => {
  return Object.prototype.toString.call(target) === "[object String]";
};
const isArray = (target) => {
  return Object.prototype.toString.call(target) === "[object Array]";
};
const isBoolean = (target) => {
  return Object.prototype.toString.call(target) === "[object Boolean]";
};
const isNumber = (target) => {
  return Object.prototype.toString.call(target) === "[object Number]";
};

module.exports = {
  formatJsonToElement,
};
