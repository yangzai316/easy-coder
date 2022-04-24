import { Button, Row, Col } from "antd";
import { v4 as uuidv4 } from "uuid";
import { mixComponentToTree } from "../../../helper";

const formItemContentList = [
  {
    type: "Input",
    label: "输入框",
  },
  {
    type: "Select",
    label: "下拉选择器",
  },
  {
    type: "Switch",
    label: "开关",
  },
  {
    type: "TimePicker",
    label: "时间选择框",
  },
  {
    type: "TimePickerRangePicker",
    label: "时间范围选择器",
  },
  {
    type: "Button",
    label: "按钮",
  },
  {
    type: "DatePicker",
    label: "日期选择框",
  },
  {
    type: "DatePickerRangePicker",
    label: "日期范围选择框",
  },
  {
    type: "InputNumber",
    label: "数字输入框",
  },
  {
    type: "Rate",
    label: "评分",
  },
  {
    type: "CheckboxGroup",
    label: "多选框组",
  },
];

const AddFormItemContent = ({ parentUid, updateView }) => {
  const add = (type) => {
    const uid = uuidv4();
    mixComponentToTree(uid, type, parentUid, "object");
    updateView(uid);
  };
  return (
    <div>
      <p>添加表单组件：</p>
      <Row gutter={[10, 4]}>
        {formItemContentList.map((item) => {
          return (
            <Col className="gutter-row" span={12} key={item.type}>
              <Button
                size="small"
                onClick={() => {
                  add(item.type);
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
