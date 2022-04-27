import { Button, Row, Col } from "antd";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";

// 数据源处理
const formItemContentList = [
  {
    name: "Avatar",
    label: "头像",
  },
];

const AddChild = ({ parentUid, updateView }) => {
  const add = (type) => {
    const uid = uuidv4();
    mixComponentToTree(uid, type, parentUid);
    updateView(uid);
  };
  return (
    <div>
      <p>添加子组件：</p>
      <Row gutter={[10, 4]}>
        {formItemContentList.map((item) => {
          return (
            <Col className="gutter-row" span={12} key={item.name}>
              <Button
                size="small"
                onClick={() => {
                  add(item.name);
                }}
              >
                {item.label}
              </Button>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AddChild;
