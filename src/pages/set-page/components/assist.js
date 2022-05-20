import { Button, Switch } from "antd";
import { toggleFocusAllElement } from "./../../../helper";
import ORIGIN from "./../../../data/ORIGIN_TREE";
import INITIAL_ROOT from "./../../../data/INITIAL_ROOT";

const Assist = ({ updateCount, updateView }) => {
  return (
    <div className="assist-nav">
      <div className="assist-nav-left">
        <span>更新：{updateCount} 次；</span>
        <Switch
          size="small"
          checkedChildren="辅助线"
          unCheckedChildren="辅助线"
          onChange={toggleFocusAllElement}
        />
      </div>
      <div>
        <Button
          type="link"
          onClick={() => {
            console.log("查看结果：", ORIGIN);
          }}
        >
          查看JSON
        </Button>
        <Button
          type="link"
          onClick={() => {
            ORIGIN.TREE = {};
            ORIGIN.TREE["id-root"] = JSON.parse(JSON.stringify(INITIAL_ROOT));
            updateView();
          }}
        >
          清空
        </Button>
      </div>
    </div>
  );
};

export default Assist;
