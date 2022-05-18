const { accessSync, constants, writeFileSync } = require("fs");
// 获取目标项目中路由信息
const getRoute = (path) => {
  try {
    accessSync(path, constants.R_OK | constants.W_OK);
    return require(path);
  } catch (err) {
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
  return JSON.stringify({
    list,
  });
};
// 将新路由信息写进项目中
const writeContentToProject = (path, content) => {
  try {
    writeFileSync(path, content, { encoding: "utf-8" });
  } catch (error) {}
};
module.exports = {
  getRoute,
  editRouteContent,
  writeContentToProject,
};
