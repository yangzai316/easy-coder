import { Tabs, Input } from "antd";
import ORIGIN_TREE from "./../../../data/origin-tree";
import ATTR_MAP from "./../../../data/attr-map";
import "./../../../style/space-config.scss";
import { editConfigForStyle } from "./../../../helper";

import AddFormItem from "./add-form-item";

const { TabPane } = Tabs;

const SpaceConfig = ({ currentUid, setCurrentUid }) => {
  const styleChange = (value, key) => {
    // 修改样式
    editConfigForStyle(currentUid, key, value);
    // 更新视图
    // setCurrentUid();
  };
  return (
    <div className="space-config">
      <div className="title-current">当前uid：{currentUid}</div>
      <div className="title-current">当前ame：{currentUid}</div>
      <Tabs defaultActiveKey="1" size="small">
        <TabPane tab="样式" key="1">
          {Object.entries(ORIGIN_TREE[currentUid]?.style || []).map(
            ([key, value], index) => {
              return (
                <div className="form-item" key={index}>
                  <span>{ATTR_MAP[key]}：</span>
                  <Input
                    size="small"
                    value={value}
                    onChange={(e) => {
                      styleChange(e.target.value, key);
                    }}
                  />
                </div>
              );
            }
          )}
        </TabPane>
        <TabPane tab="属性" key="2">
          暂不支持
        </TabPane>
        <TabPane tab="高级" key="3">
          {ORIGIN_TREE[currentUid]?.name === "Form" ? (
            <AddFormItem parentUid={currentUid} setCurrentUid={setCurrentUid} />
          ) : null}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SpaceConfig;
