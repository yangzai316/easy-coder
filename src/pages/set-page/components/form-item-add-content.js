import { Button, Row, Col } from "antd";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";
import { ELEMENT_LIST } from "./../../../data/ELEMENT";
// 数据源处理：只处理[1]，即处理表单子组件，除去Form、FormItem
const list = ELEMENT_LIST[1].list;
const formItemContentList = list.filter(
  (item) => item.name !== "Form" && item.name !== "FormItem"
);

const AddFormItemContent = ({ parentUid, updateView }) => {
  const add = (type) => {
    const uid = uuidv4();
    mixComponentToTree(uid, type, parentUid, () => {
      updateView(uid);
    });
  };
  return (
    <div>
      <p>添加表单组件：</p>
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

export default AddFormItemContent;
