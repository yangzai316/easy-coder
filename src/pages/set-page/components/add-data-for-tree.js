import React, { useState } from "react";
import { Button, notification } from "antd";
import { editConfigForProps } from "../../../helper";
import DialogMonaco from "./dialog-monaco";

const AddDataForTree = ({ parentUid, updateView }) => {
  // 操作 dialog
  const [isModalVisible, setIsModalVisible] = useState(false);
  // dialog 回调
  const cb = (visible, val) => {
    setIsModalVisible(visible);
    if (!val) return;
    try {
      const data = JSON.parse(val);
      if (!Array.isArray(data)) {
        throw new Error();
      }
      editConfigForProps(parentUid, "treeData", data);
      notification.success({
        message: "添加成功",
        style: { width: "160px" },
        duration: 2,
      });
      updateView();
    } catch (error) {
      notification.error({
        message: "添加失败：格式输入不正确",
        duration: 2,
      });
    }
  };
  return (
    <>
      <Button
        block
        type="primary"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        输入列表组件数据
      </Button>
      <DialogMonaco
        isModalVisible={isModalVisible}
        cb={cb}
        message="请在下方编辑器输入列表数据源dataSource和列表配置信息columns，注意 json 数据格式，右击有辅助功能。"
        defaultValue={`
[
    {
        "title": "parent 1",
        "key": "0-0",
        "children": [
          {
            "title": "parent 1-0",
            "key": "0-0-0",
            "disabled": true,
            "children": [
              { "title": "leaf1", "key": "0-0-0-0", "disableCheckbox": true },
              { "title": "leaf2", "key": "0-0-0-1" }
            ]
          },
          {
            "title": "parent 1-1",
            "key": "0-0-1",
            "children": [{ "title": "leaf1", "key": "0-0-1-0" }]
          }
        ]
      }
]
    `}
      ></DialogMonaco>
    </>
  );
};

export default AddDataForTree;
