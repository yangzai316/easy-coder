const { formatJsonToElement, createPreViewTemplate } = require("./utils");

const prvView = (data) => {
  const { elementCodeStr, useMoudleStr } = formatJsonToElement(data);
  console.log(createPreViewTemplate(elementCodeStr, useMoudleStr));
};

module.exports = {
  prvView,
};
