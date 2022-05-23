import { message } from "antd";
import { isArray } from "./../utils/index";
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
    const { elementCodeStr, moduleStr, dataSourceStr } =
      formatJsonToElement(content);
    const componentContent = createComponentContent(
      elementCodeStr,
      moduleStr,
      dataSourceStr,
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
  let dataSourceStr = "";
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
        if (cur === "options" && data.dataSource) {
          return prv + ` ${cur}={${data.dataSource.fieldName}}`;
        } else if (isArray(data.props[cur])) {
          return prv + ` ${cur}={${JSON.stringify(data.props[cur])}}`;
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
            message.error(err.message)
          })
        },[])
      `;
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
    dataSourceStr,
  };
};

/**
 * 创建组件内容
 */
const createComponentContent = (
  code,
  moduleStr,
  dataSourceStr,
  currentRoute
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
    console.error("readJson is error : ", err);
    return "{}";
  }
};
