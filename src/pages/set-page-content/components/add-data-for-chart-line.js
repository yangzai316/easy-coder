import React, { useState } from "react";
import { Button, notification } from "antd";
import { editConfigForProps } from "../../../helper";
import DialogMonaco from "./dialog-monaco";

const AddDataForTable = ({ parentUid, updateView }) => {
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
      editConfigForProps(parentUid, "data", data);
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
        输入折线图数据
      </Button>
      <DialogMonaco
        isModalVisible={isModalVisible}
        cb={cb}
        message="请在下方编辑器输入折线图数据，注意 json 数据格式，右击有辅助功能。"
        defaultValue={`
[
    {
        x: "2010-01",
        y: 18,
    },
    {
        x: "2010-02",
        y: 30,
    },
    {
        x: "2010-03",
        y: 20,
    },
    {
        x: "2010-04",
        y: 48,
    },
]   
    `}
      ></DialogMonaco>
    </>
  );
};

export default AddDataForTable;
