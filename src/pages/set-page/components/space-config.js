import { Tabs } from "antd";
import ORIGIN from "./../../../data/ORIGIN_TREE";
import "./../../../style/space-config.scss";
import {
  editConfigForStyle,
  editConfigForProps,
  deleteElementById,
} from "./../../../helper";
import SetupAdvanced from "./setup-advanced";
import SetupNormal from "./setup-normal";
import NativeStyleConfig from "./native-style-config";
import { DeleteOutlined } from "@ant-design/icons";
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
        <span>
          当前name：{ORIGIN.TREE[currentUid]?.name}
          {ORIGIN.TREE[currentUid]?.elementType}
        </span>
        {currentUid !== "id-root" && (
          <DeleteOutlined
            style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
            onClick={() => {
              deleteElementById(currentUid, () => {
                // 更新视图
                updateView();
              });
            }}
          />
        )}
      </div>

      <Tabs defaultActiveKey="1" size="small">
        <TabPane tab="基本样式" key="1">
          {ORIGIN.TREE[currentUid]?.elementType === "basic" && (
            <div style={{ width: "240px", height: "150px" }}>
              <NativeStyleConfig
                styleData={ORIGIN.TREE[currentUid]?.style}
                change={change}
              ></NativeStyleConfig>
            </div>
          )}
          {/* {Object.entries(ORIGIN.TREE[currentUid]?.style || []).map(
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
          )} */}
        </TabPane>
        <TabPane tab="组件属性" key="2">
          {Object.entries(ORIGIN.TREE[currentUid]?.props || []).map(
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
            name={ORIGIN.TREE[currentUid]?.name}
            currentUid={currentUid}
            updateView={updateView}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SpaceConfig;
