const {
  accessSync,
  constants,
  writeFileSync,
  readFileSync,
  mkdirSync,
} = require("fs");
// 获取目标项目中路由信息
const getRouteJsonContent = (path) => {
  try {
    accessSync(path, constants.R_OK | constants.W_OK);
    return JSON.parse(
      readFileSync(path, {
        encoding: "utf-8",
      })
    );
  } catch (err) {
    console.log("getRouteJsonContent is err", err);
    return {};
  }
};
// 根据原有路由信息和新增信息，组成新路由信息
const editRouteContent = (oldContent, newRoute) => {
  const list = oldContent.list || [];
  const i = list.findIndex((item) => item.newRoute === newRoute.newRoute);
  if (i > 0) {
    list[i] = newRoute;
  } else {
    list.push(newRoute);
  }
  return list;
};
// 创建默认组件
const writeDefaultComponent = (dirPath, newRoute) => {
  console.log(">>>", dirPath);
  const content = `
import React from 'react';

export default () => {
  return <h1>${newRoute.componentName}</h1>;
};
`;

  try {
    mkdirSync(dirPath);
    writeFileSync(`${dirPath}/index.js`, content, { encoding: "utf-8" });
  } catch (error) {
    console.error("writeDefaultComponent error", error);
  }
};
// 将新路由Json 写进项目中
const writeRouteJson = (path, list) => {
  try {
    writeFileSync(path, JSON.stringify({ list }), {
      encoding: "utf-8",
    });
  } catch (error) {
    console.log("writeRouteJson is err", error);
  }
};
// 将新路由js 写进项目中
const writeRouteJs = (path, list) => {
  let _importStr = "";
  let _objStr = "";

  list.forEach((item) => {
    _importStr += `import ${
      item.componentName
    } from "../pages/${item.componentName.toLowerCase()}/index";
    `;
    _objStr += `
      {
        path: "${item.routePath}",
        element: <${item.componentName} />,
        name: "${item.routeName}",
      },
    `;
  });
  const content = `
import React from "react"; 
${_importStr}

export default [
   ${_objStr}
];
  
`;

  try {
    writeFileSync(path, content, { encoding: "utf-8" });
  } catch (error) {
    console.log("writeRouteJson is err", error);
  }
};
module.exports = {
  getRouteJsonContent,
  editRouteContent,
  writeRouteJson,
  writeRouteJs,
  writeDefaultComponent,
};
