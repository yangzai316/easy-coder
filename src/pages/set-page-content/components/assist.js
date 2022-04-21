import { Layout, Switch } from "antd";

const Assist = ({ updateCount }) => {
  const change = (val) => {
    const spaceWork = document.getElementById("WORK_SPACE");
    spaceWork.querySelectorAll("[data-uid]").forEach((item) => {
      item.style.border = val ? "1px dashed #5584ff" : "none";
    });
  };
  return (
    <div>
      <span>更新：{updateCount} 次；</span>
      <Switch
        size="small"
        checkedChildren="辅助线"
        unCheckedChildren="辅助线"
        onChange={change}
      />
    </div>
  );
};

export default Assist;
