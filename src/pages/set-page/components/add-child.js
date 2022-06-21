import { Button, Row, Col } from "antd";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";

const AddChild = ({ parentUid, updateView, targetMap }) => {
  const add = (type) => {
    const uid = uuidv4();
    mixComponentToTree(uid, type, parentUid, () => {
      updateView(uid);
    });
  };
  return (
    <div>
      <p>添加子组件：</p>
      <Row gutter={[10, 4]}>
        {Object.keys(targetMap).map((key) => {
          return (
            <Col className="gutter-row" span={12} key={key}>
              <Button
                size="small"
                onClick={() => {
                  add(key);
                }}
              >
                {targetMap[key]}
              </Button>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AddChild;
