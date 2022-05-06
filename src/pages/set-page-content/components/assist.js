import { Button, Switch } from "antd";
import { toggleFocusAllElement } from "./../../../helper";
import ORIGIN_TREE from "./../../../data/origin-tree";

const Assist = ({ updateCount }) => {
  return (
    <div>
      <span>更新：{updateCount} 次；</span>
      <Switch
        size="small"
        checkedChildren="辅助线"
        unCheckedChildren="辅助线"
        onChange={toggleFocusAllElement}
      />
      <Button
        onClick={() => {
          console.log(ORIGIN_TREE["id-root"]);
        }}
      >
        查看JSON
      </Button>
    </div>
  );
};

export default Assist;
