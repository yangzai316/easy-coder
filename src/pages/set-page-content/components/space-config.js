import { Tabs, Input } from "antd";
import ORIGIN_TREE from "./../../../data/origin-tree";
import ATTR_MAP from "./../../../data/attr-map";
import "./../../../style/space-config.scss";
import { editConfigForStyle } from "./../../../helper";

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
      <Tabs defaultActiveKey="1" size="small">
        <TabPane tab="样式" key="1">
          {Object.entries(ORIGIN_TREE[currentUid].style).map(
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
          暂不支持
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SpaceConfig;
