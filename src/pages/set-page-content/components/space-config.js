import { Tabs, Input, Row, Col, InputNumber, Switch } from "antd";
import ORIGIN_TREE from "./../../../data/origin-tree";
import ATTR_MAP from "./../../../data/attr-map";
import "./../../../style/space-config.scss";
import { editConfigForStyle, editConfigForProps } from "./../../../helper";
import { isString, isBoolean, isNumber } from "../../../utils";
import AdvancedSetup from "./advanced-setup";

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
                  <Col flex="70px">{ATTR_MAP[key] || key}：</Col>
                  <Col>
                    <EasyInput
                      value={value}
                      type={key}
                      change={change}
                      attrType="props"
                    />
                  </Col>
                </Row>
              );
            }
          )}
        </TabPane>
        <TabPane tab="高级设置" key="3">
          <AdvancedSetup
            name={ORIGIN_TREE[currentUid]?.name}
            currentUid={currentUid}
            updateView={updateView}
          />
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
      ) : isNumber(value) || value === null ? (
        <InputNumber
          size="small"
          value={value}
          onChange={(val) => {
            change(val, type, attrType);
          }}
        />
      ) : isBoolean(value) ? (
        <Switch
          size="small"
          defaultChecked={value}
          onChange={(val) => {
            change(val, type, attrType);
          }}
        />
      ) : (
        "前往【高级设置】进行操作"
      )}
    </>
  );
};

export default SpaceConfig;
