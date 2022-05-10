import { Tabs } from "antd";
import ORIGIN_TREE from "./../../../data/ORIGIN_TREE";
import "./../../../style/space-config.scss";
import { editConfigForStyle, editConfigForProps } from "./../../../helper";
import SetupAdvanced from "./setup-advanced";
import SetupNormal from "./setup-normal";

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
                <SetupNormal
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
                <SetupNormal
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
          <SetupAdvanced
            name={ORIGIN_TREE[currentUid]?.name}
            currentUid={currentUid}
            updateView={updateView}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SpaceConfig;
