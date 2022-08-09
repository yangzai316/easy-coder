import { message } from "antd";
import { isArray, isBoolean, isNumber, isObject } from "./../utils/index";
const { writeFileSync, readFileSync } = window.require("fs");
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
/**
 * 将创建的json转为页面组件写入本地
 */
export const writePageComponent = (currentProject, currentRoute, content) => {
  const path = `${currentProject.projectPath}/${
    currentProject.projectName
  }/src/pages/${currentRoute.componentName.toLowerCase()}`;
  try {
    const { elementCodeStr, moduleStr, dataSourceStr, eventStr } =
      formatJsonToElement(content);
    const componentContent = createComponentContent(
      elementCodeStr,
      moduleStr,
      dataSourceStr,
      currentRoute,
      eventStr
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
  let dataSourceStr = "";
  let eventStr = "";
  const formatCode = (data) => {
    let content = data.children || "";
    // 子代存在 > 进入递归
    if (Array.isArray(data.children) && data.children.length > 0) {
      content = data.children.reduce((prv, cur, index) => {
        return prv + formatCode(cur);
      }, "");
    } else if (isObject(data.children)) {
      content = formatCode(data.children);
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
        if (
          (cur === "options" || cur === "data" || cur === "dataSource") &&
          data.dataSource
        ) {
          return prv + ` ${cur}={${data.dataSource.fieldName}}`;
        } else if (cur === "fieldname") {
          return prv + ` name="${data.props[cur]}"`;
        } else if (isArray(data.props[cur])) {
          return prv + ` ${cur}={${JSON.stringify(data.props[cur])}}`;
        } else if (isBoolean(data.props[cur])) {
          return prv + ` ${cur}={${data.props[cur]}}`;
        } else if (isNumber(data.props[cur])) {
          return prv + ` ${cur}={${data.props[cur]}}`;
        }
        return prv + ` ${cur}="${data.props[cur]}"`;
      }, "");
    }
    // 处理 dataSource
    if (data.dataSource) {
      dataSourceStr += `
        const [${data.dataSource.fieldName},set${data.dataSource.fieldName}] = useState(${data.dataSource.nullValue});
        useEffect(()=>{
          ${data.dataSource.apiMethod}('${data.dataSource.apiUrl}',{}).then((result)=>{
            set${data.dataSource.fieldName}(${data.dataSource.resultStructure})
          }).catch(err=>{
            message.error(err)
          })
        },[])
      `;
    }
    // 处理 事件
    let event = "";
    if (data.event) {
      const { str, attr } = writeEvent(data.event);
      eventStr += str;
      event = attr;
    }
    // 自身标签生成 & 拼接子代内容
    const tagName = data.realName || data.name;
    const result = `<${tagName}${style}${props} ${event}>${content}</${tagName}>`;
    if (data.name.indexOf("Easy") >= 0) {
      moduleSetEasy.add(tagName);
    } else if (data.name.indexOf("Chart") >= 0) {
      moduleSetChart.add(data.realName);
    } else if (data.realName) {
      moduleSetAntd.add(data.realName.split(".")[0]);
    } else {
      moduleSetAntd.add(tagName);
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
    dataSourceStr,
    eventStr,
  };
};
/**
 *  将事件处理为文件内容
 */
const writeEvent = (event) => {
  let str = "";
  let attr = "";
  Object.values(event).forEach((item) => {
    str += `
        const ${item.eventName} = (values) =>{
          ${item.apiMethod}('${item.apiUrl}',values).then((result)=>{
            set${item.editFieldName}(${item.resultStructure})
          }).catch(err=>{
            message.error(err)
          })
        }
      `;
    attr += `${item.eventType}={${item.eventName}}`;
  });
  return { str, attr };
};
/**
 * 创建组件内容
 */
const createComponentContent = (
  code,
  moduleStr,
  dataSourceStr,
  currentRoute,
  eventStr
) => {
  const easyMoudleStr = moduleStr.easyMoudleStr
    ? `import { ${moduleStr.easyMoudleStr} } from "./../../components/index";`
    : "";
  const antdMoudleStr = moduleStr.antdMoudleStr
    ? `import { ${moduleStr.antdMoudleStr} message } from "antd";`
    : "";
  const chartMoudleStr = moduleStr.chartMoudleStr
    ? `import { ${moduleStr.chartMoudleStr} } from "@ant-design/plots";`
    : "";

  return `
  import React, { useEffect, useState } from "react";
  import { get, post } from "./../../utils/fetch";
  ${easyMoudleStr}
  ${antdMoudleStr}
  ${chartMoudleStr}
  
  
  const ${currentRoute.componentName} = ()=>{

    ${dataSourceStr}
    
    ${eventStr}
    return ${code};
  }
  export default ${currentRoute.componentName};
  `;
};

/**
 * 读取本地json数据
 */
export const readComponentJson = (currentProject, currentRoute) => {
  const path = `${currentProject.projectPath}/${
    currentProject.projectName
  }/src/pages/${currentRoute.componentName.toLowerCase()}/index.json`;
  try {
    const data = readFileSync(path, {
      encoding: "utf-8",
    });
    message.success("当前组件JSON数据获取成功");
    return data;
  } catch (err) {
    message.warning(`${err.message}`);
    return "{}";
  }
};
