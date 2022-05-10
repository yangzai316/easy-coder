/**
 *
 * 修改样式或属性
 */

import { isString, isBoolean, isNumber } from "../../../utils";
import { Input, Row, Col, InputNumber, Switch, Select } from "antd";
import ZH_CN_MAP from "./../../../locales/zh-cn";
import OPTIONAL_MAP from "./../../../data/OPTIONAL_MAP";

const SetupNormal = ({ value, type, change, attrType }) => {
  // attrType = style : 修改样式
  // attrType = props : 修改属性
  return (
    <Row wrap={false}>
      <Col span={7}>{ZH_CN_MAP[type] || type}：</Col>
      <Col span={17}>
        <>
          {isString(value) && OPTIONAL_MAP[type] ? (
            // 下拉框式
            <Select
              style={{ width: "100%" }}
              size="small"
              options={OPTIONAL_MAP[type]}
              value={value}
              onChange={(val) => {
                change(val, type, attrType);
              }}
            />
          ) : isString(value) ? (
            // 输入框
            <Input
              size="small"
              value={value}
              onChange={(e) => {
                change(e.target.value, type, attrType);
              }}
            />
          ) : isNumber(value) || value === null ? (
            // 数字输入框
            <InputNumber
              size="small"
              value={value}
              onChange={(val) => {
                change(val, type, attrType);
              }}
            />
          ) : isBoolean(value) ? (
            // 开关
            <Switch
              size="small"
              defaultChecked={value}
              onChange={(val) => {
                change(val, type, attrType);
              }}
            />
          ) : (
            // 对象类型，不支持在这里修改
            "前往【高级设置】进行操作"
          )}
        </>
      </Col>
    </Row>
  );
};

export default SetupNormal;
