const clone = require("git-clone/promise");

const cloneTemplate = async (data) => {
  const { gitUrl, projectPath, projectName } = data;
  await clone(
    gitUrl || "https://gitee.com/yangzai316/template-antd-pro.git",
    `${projectPath}/${projectName}`
  );
};

module.exports = {
  cloneTemplate,
};
