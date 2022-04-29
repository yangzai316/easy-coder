import { Tabs, Input, Row, Col, InputNumber } from "antd";
import ORIGIN_TREE from "./../../../data/origin-tree";
import ATTR_MAP from "./../../../data/attr-map";
import "./../../../style/space-config.scss";
import { editConfigForStyle, editConfigForProps } from "./../../../helper";
import { isObject, isArray, isString } from "../../../utils";

import AddFormItem from "./form-add-item";
import AddFormItemContent from "./form-item-add-content";
import AddOptionUseFormList from "./add-option-use-formlist";
import AddOptionUseInput from "./add-option-use-input";
import AddChild from "./add-child";
import AddOptionForCarousel from "./add-optioin-for-carousel";
import AddPanelForCollapse from "./add-panel-for-collapse";

const { TabPane } = Tabs;

const SpaceConfig = ({ currentUid, updateView }) => {
  const change = (value, key, type) => {
    // 修改样式 or 属性
    type === "style"
      ? editConfigForStyle(currentUid, key, value)
      : editConfigForProps(currentUid, key, value);

    // 更新视图
    updateView();
  };
  return (
    <div className="space-config">
      <div className="title-current">当前uid：{currentUid}</div>
      <div className="title-current">
        当前name：{ORIGIN_TREE[currentUid]?.name}
      </div>
      <Tabs defaultActiveKey="1" size="small">
        <TabPane tab="基本样式" key="1">
          {Object.entries(ORIGIN_TREE[currentUid]?.style || []).map(
            ([key, value], index) => {
              return (
                <Row key={index} wrap={false}>
                  <Col flex="60px">{ATTR_MAP[key] || key}：</Col>
                  <Col>
                    <EasyInput
                      value={value}
                      type={key}
                      change={change}
                      attrType="style"
                    />
                  </Col>
                </Row>
              );
            }
          )}
        </TabPane>
        <TabPane tab="组件属性" key="2">
          {Object.entries(ORIGIN_TREE[currentUid]?.props || []).map(
            ([key, value], index) => {
              return (
                <Row key={index} wrap={false}>
                  <Col flex="60px">{ATTR_MAP[key] || key}：</Col>
                  {isObject(value) || isArray(value) ? (
                    <Col
                      style={{
                        border: "1px solid #ccc",
                        backgroundColor: "#ccc",
                      }}
                    >
                      不支持修改
                    </Col>
                  ) : (
                    <Col>
                      <EasyInput
                        value={value}
                        type={key}
                        change={change}
                        attrType="props"
                      />
                    </Col>
                  )}
                </Row>
              );
            }
          )}
        </TabPane>
        <TabPane tab="高级设置" key="3">
          {ORIGIN_TREE[currentUid]?.name === "Form" ? (
            <AddFormItem parentUid={currentUid} updateView={updateView} />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "FormItem" ? (
            <AddFormItemContent
              parentUid={currentUid}
              updateView={updateView}
            />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "Select" ? (
            <AddOptionUseFormList
              parentUid={currentUid}
              updateView={updateView}
            />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "CheckboxGroup" ? (
            <AddOptionUseFormList
              parentUid={currentUid}
              updateView={updateView}
            />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "RadioGroup" ? (
            <AddOptionUseFormList
              parentUid={currentUid}
              updateView={updateView}
            />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "Cascader" ? (
            <AddOptionUseInput parentUid={currentUid} updateView={updateView} />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "Badge" ? (
            <AddChild parentUid={currentUid} updateView={updateView} />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "Carousel" ? (
            <AddOptionForCarousel
              parentUid={currentUid}
              updateView={updateView}
            />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "Collapse" ? (
            <AddPanelForCollapse
              parentUid={currentUid}
              updateView={updateView}
            />
          ) : null}
        </TabPane>
      </Tabs>
    </div>
  );
};

/**
 *
 * 修改样式或属性的Input集成组件
 */
const EasyInput = ({ value, type, change, attrType }) => {
  // style : 修改样式
  // props : 修改属性
  return (
    <>
      {isString(value) ? (
        <Input
          size="small"
          value={value}
          onChange={(e) => {
            change(e.target.value, type, attrType);
          }}
        />
      ) : (
        <InputNumber
          size="small"
          value={value}
          onChange={(val) => {
            change(val, type, attrType);
          }}
        />
      )}
    </>
  );
};

export default SpaceConfig;
