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

/**
 *
 * 将Json 转为 标签字符串
 * {
 *  name:'a',
 *  children:[{
 *      name:'b'    =>  '<a> <b></b> </a>'
 *   }]
 * }
 */
const formatJsonToElement = (data) => {
  let moduleSet = new Set();
  const formatCode = (data) => {
    let content = data.children || "";
    // 子代存在 > 进入递归
    if (Array.isArray(data.children) && data.children.length > 0) {
      content = data.children.reduce((prv, cur, index) => {
        return prv + formatCode(cur);
      }, "");
    }
    // 处理 style
    let style = "";
    if (data.style) {
      style = ` style={${JSON.stringify(data.style)}}`;
    }
    // 处理 props
    let props = "";
    if (data.props) {
      props = Object.keys(data.props).reduce((prv, cur) => {
        if (isString(data.props[cur])) {
          return prv + ` ${cur}="${data.props[cur]}"`;
        } else if (isBoolean(data.props[cur])) {
          return prv + ` ${cur}={${data.props[cur]}}`;
        }
      }, "");
    }
    // 自身标签生成 & 拼接子代内容
    const result = `<${data.name}${style}${props}>${content}</${data.name}>`;
    moduleSet.add(data.name);

    return result;
  };
  return {
    elementCodeStr: formatCode(JSON.parse(data)),
    useMoudleStr: Array.from(moduleSet).reduce((prv, cur) => {
      return `${prv}${cur},`;
    }, ""),
  };
};

/**
 *
 */
const createPreViewTemplate = (code, modules) => {
  return `
import { ELEMENT_ALL } from "./../../data/ELEMENT";
const { ${modules} } = ELEMENT_ALL;

const PreView = ()=>{
  return ${code};
}
export default PreView;
`;
};

module.exports = {
  formatJsonToElement,
  createPreViewTemplate,
};
