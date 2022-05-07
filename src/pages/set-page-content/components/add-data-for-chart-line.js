import React, { useMemo, useState } from "react";
import { Button, notification } from "antd";
import { editConfigForProps } from "../../../helper";
import DialogMonaco from "./dialog-monaco";
import ORIGIN_TREE from "./../../../data/origin-tree";

const AddDataForChartLine = ({ currentUid, updateView }) => {
  // 操作 dialog
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialValue, setInitialValue] = useState(JSON.stringify(ORIGIN_TREE[currentUid]?.props.data));
  const handleBtn = () => {
    setInitialValue(JSON.stringify(ORIGIN_TREE[currentUid]?.props.data));
    setIsModalVisible(true);
  };
  // dialog 回调
  const cb = (visible, val) => {
    setIsModalVisible(visible);
    if (!val) return;
    try {
      const data = JSON.parse(val);
      if (!Array.isArray(data)) {
        throw new Error();
      }
      editConfigForProps(currentUid, "data", data);
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
      <Button block type="primary" onClick={handleBtn}>
        输入折线图数据
      </Button>
      <DialogMonaco
        isModalVisible={isModalVisible}
        cb={cb}
        message="请在下方编辑器输入折线图数据，注意 json 数据格式；右击有格式化代码等辅助功能"
        defaultValue={initialValue}
      ></DialogMonaco>
    </>
  );
};

export default AddDataForChartLine;