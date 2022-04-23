import { Tabs, Input } from "antd";
import ORIGIN_TREE from "./../../../data/origin-tree";
import ATTR_MAP from "./../../../data/attr-map";
import "./../../../style/space-config.scss";
import { editConfigForStyle, editConfigForProps } from "./../../../helper";
import { isString } from "../../../utils";

import AddFormItem from "./add-form-item";
import AddFormItemContent from "./add-form-item-content";

const { TabPane } = Tabs;

const SpaceConfig = ({ currentUid, setCurrentUid, updateConfig }) => {
  const change = (value, key, type) => {
    // 修改样式
    type === "style"
      ? editConfigForStyle(currentUid, key, value)
      : editConfigForProps(currentUid, key, value);

    // 更新视图
    updateConfig();
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
                <div className="form-item" key={index}>
                  <span>{ATTR_MAP[key] || key}：</span>
                  <Input
                    size="small"
                    value={value}
                    onChange={(e) => {
                      change(e.target.value, key, "style");
                    }}
                  />
                </div>
              );
            }
          )}
        </TabPane>
        <TabPane tab="组件属性" key="2">
          {Object.entries(ORIGIN_TREE[currentUid]?.props || []).map(
            ([key, value], index) => {
              return (
                <div className="form-item" key={index}>
                  <span>{ATTR_MAP[key] || key}：</span>
                  {isString(value) ? (
                    <Input
                      size="small"
                      value={value}
                      onChange={(e) => {
                        change(e.target.value, key, "props");
                      }}
                    />
                  ) : (
                    <span style={{ border: "1px solid #ccc" }}>
                      {JSON.stringify(value)}
                    </span>
                  )}
                </div>
              );
            }
          )}
        </TabPane>
        <TabPane tab="高级设置" key="3">
          {ORIGIN_TREE[currentUid]?.name === "Form" ? (
            <AddFormItem parentUid={currentUid} setCurrentUid={setCurrentUid} />
          ) : null}
          {ORIGIN_TREE[currentUid]?.name === "FormItem" ? (
            <AddFormItemContent
              parentUid={currentUid}
              setCurrentUid={setCurrentUid}
            />
          ) : null}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SpaceConfig;
