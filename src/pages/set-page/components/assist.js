import { Button, Switch } from "antd";
import { toggleFocusAllElement } from "./../../../helper";
import ORIGIN from "./../../../data/ORIGIN_TREE";

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
            console.log(ORIGIN);
          }}
        >
          查看JSON
        </Button>
        <Button
          type="link"
          onClick={() => {
            ORIGIN.TREE = {};
            ORIGIN.TREE["id-root"] = {
              uid: "id-root",
              name: "EasyContainer",
              style: {
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                padding: "4px",
                overflow: "auto",
              },
              children: [],
            };
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
