import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";

const AddFormItem = ({ parentUid, updateView }) => {
  const add = () => {
    const uid = uuidv4();
    mixComponentToTree(uid, "FormItem", parentUid);
    updateView(uid);
  };
  return (
    <div>
      <Button size="small" onClick={add}>
        新增表单项
        <PlusOutlined />
      </Button>
    </div>
  );
};

export default AddFormItem;
