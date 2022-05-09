import { Tabs, Input, Row, Col, InputNumber, Switch, Select } from "antd";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";
import ZH_CN_MAP from "./../../../locales/zh-cn";
import OPTIONAL_TREE from "./../../../data/OPTIONAL_TREE";
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
                <EasyInput
                  key={index}
                  value={value}
                  type={key}
                  change={change}
                  attrType="style"
                />
              );
            }
          )}
        </TabPane>
        <TabPane tab="组件属性" key="2">
          {Object.entries(ORIGIN_TREE[currentUid]?.props || []).map(
            ([key, value], index) => {
              return (
                <EasyInput
                  key={index}
                  value={value}
                  type={key}
                  change={change}
                  attrType="props"
                />
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
    <Row wrap={false}>
      <Col span={7}>{ZH_CN_MAP[type] || type}：</Col>
      <Col span={17}>
        <>
          {OPTIONAL_TREE[type] ? (
            <Select
              style={{ width: "100%" }}
              size="small"
              options={OPTIONAL_TREE[type].list}
              value={value}
              onChange={(val) => {
                change(val, type, attrType);
              }}
            />
          ) : isString(value) ? (
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
      </Col>
    </Row>
  );
};

export default SpaceConfig;
