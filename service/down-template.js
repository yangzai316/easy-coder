const clone = require("git-clone/promise");

const cloneTemplate = async (data) => {
  const { projectTemplateUrl, projectPath, projectName } = data;
  await clone(projectTemplateUrl, `${projectPath}/${projectName}`);
};

module.exports = {
  cloneTemplate,
};
