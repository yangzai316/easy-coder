import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";

const AddPanelForCollapse = ({ parentUid, updateView }) => {
  const add = () => {
    const uid = uuidv4();
    mixComponentToTree(uid, "CollapsePanel", parentUid, () => {
      updateView(uid);
    });
  };
  return (
    <div>
      <Button size="small" onClick={add}>
        新增折叠面板子项
        <PlusOutlined />
      </Button>
    </div>
  );
};

export default AddPanelForCollapse;
