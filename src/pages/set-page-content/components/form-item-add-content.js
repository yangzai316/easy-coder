import { Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";

const formItemContentList = [
  {
    type: "Input",
    label: "输入框",
  },
  {
    type: "Select",
    label: "选择器",
  },
  {
    type: "Button",
    label: "按钮",
  },
];

const AddFormItemContent = ({ parentUid, setCurrentUid }) => {
  const add = (type) => {
    const uid = uuidv4();
    mixComponentToTree(uid, type, parentUid, "object");
    setCurrentUid(uid);
  };
  return (
    <div>
      <Row gutter={[8, 8]}>
        {formItemContentList.map((item) => {
          return (
            <Col className="gutter-row" span={12} key={item.type}>
              <Button
                size="small"
                onClick={() => {
                  add(item.type);
                }}
              >
                添加{item.label}
                <PlusOutlined />
              </Button>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AddFormItemContent;
