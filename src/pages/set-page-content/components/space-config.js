
import { Tabs, Input } from "antd";
import ORIGIN_TREE from "./../../../data/origin-tree";
import "./../../../style/space-config.scss";
import { editConfigForStyle } from "./../helper/index";

const { TabPane } = Tabs;

const SpaceConfig = ({ currentUid, pageUpdate, setPageUpdate }) => {
  const styleChange = (value, key) => {
    // 修改样式
    editConfigForStyle(currentUid, key, value);
    // 更新视图
    setPageUpdate(pageUpdate + 1);
  };
  return (
    <div className="space-config">
      <div className="title-current">当前：{currentUid}</div>
      <div>更新：{pageUpdate}次</div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="样式" key="1">
          {Object.entries(ORIGIN_TREE[currentUid].style).map(
            ([key, value], index) => {
              return (
                <div className="space-config-form-item" key={index}>
                  {key}:
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
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SpaceConfig;
