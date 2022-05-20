import { message } from "antd";
import { isString, isBoolean } from "./../utils/index";
const { writeFileSync } = window.require("fs");
/**
 * 将创建的json写入本地
 */
export const writePageJson = (currentProject, currentRoute, content) => {
  const path = `${currentProject.projectPath}/${
    currentProject.projectName
  }/src/pages/${currentRoute.componentName.toLowerCase()}`;
  try {
    writeFileSync(`${path}/index.json`, JSON.stringify(content), {
      encoding: "utf-8",
    });
    message.success("JSON数据保存成功");
  } catch (err) {
    console.error("writePageJson is error : ", err);
  }
};
export const writePageComponent = (currentProject, currentRoute, content) => {
  const path = `${currentProject.projectPath}/${
    currentProject.projectName
  }/src/pages/${currentRoute.componentName.toLowerCase()}`;
  try {
    const { elementCodeStr, moduleStr } = formatJsonToElement(content);
    const componentContent = createComponentContent(
      elementCodeStr,
      moduleStr,
      currentRoute
    );
    writeFileSync(`${path}/index.js`, componentContent, { encoding: "utf-8" });
    message.success("页面组件创建&保存成功");
  } catch (err) {
    console.error("writePageComponent is error : ", err);
  }
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
  let moduleSetEasy = new Set();
  let moduleSetAntd = new Set();
  let moduleSetChart = new Set();
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
    if (data.name.indexOf("Easy") >= 0) {
      moduleSetEasy.add(data.name);
    } else if (data.name.indexOf("Chart") >= 0) {
      moduleSetChart.add(data.name);
    } else {
      moduleSetAntd.add(data.name);
    }

    return result;
  };
  return {
    elementCodeStr: formatCode(data),
    moduleStr: {
      easyMoudleStr: Array.from(moduleSetEasy).reduce((prv, cur) => {
        return `${prv}${cur},`;
      }, ""),
      antdMoudleStr: Array.from(moduleSetAntd).reduce((prv, cur) => {
        return `${prv}${cur},`;
      }, ""),
      chartMoudleStr: Array.from(moduleSetChart).reduce((prv, cur) => {
        return `${prv}${cur},`;
      }, ""),
    },
  };
};

/**
 * 创建组件内容
 */
const createComponentContent = (code, moduleStr, currentRoute) => {
  const easyMoudleStr = moduleStr.easyMoudleStr
    ? `import { ${moduleStr.easyMoudleStr} } from "./../../components/index";`
    : "";
  const antdMoudleStr = moduleStr.antdMoudleStr
    ? `import { ${moduleStr.antdMoudleStr} } from "antd";`
    : "";
  const chartMoudleStr = moduleStr.chartMoudleStr
    ? `import { ${moduleStr.chartMoudleStr} } from "@ant-design/plots";`
    : "";

  return `
  import React from 'react';
  ${easyMoudleStr}
  ${antdMoudleStr}
  ${chartMoudleStr}
  
  const ${currentRoute.componentName} = ()=>{
    return ${code};
  }
  export default ${currentRoute.componentName};
  `;
};
