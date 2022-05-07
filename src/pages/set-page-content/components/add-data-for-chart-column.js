import React, { useMemo, useState } from "react";
import { Button, notification } from "antd";
import { editConfigForProps } from "../../../helper";
import DialogMonaco from "./dialog-monaco";
import { isObject } from "../../../utils";
import ORIGIN_TREE from "./../../../data/origin-tree";

let KEY = "";

const AddDataForChartColumn = ({
  currentUid,
  updateView,
  showEditMeta = true,
}) => {
  // 操作 dialog
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  // 修改数据源 data
  const editData = () => {
    KEY = "data";
    setInitialValue(JSON.stringify(ORIGIN_TREE[currentUid]?.props.data));
    setIsModalVisible(true);
  };
  // 修改meta
  const editMeta = () => {
    KEY = "meta";
    setInitialValue(JSON.stringify(ORIGIN_TREE[currentUid]?.props.meta));
    setIsModalVisible(true);
  };
  // dialog 回调
  const cb = (visible, val) => {
    setIsModalVisible(visible);
    if (!val) return;
    try {
      const data = JSON.parse(val);
      if (KEY === "data" && !Array.isArray(data)) {
        throw new Error();
      } else if (KEY === "meta" && !isObject(data)) {
        throw new Error();
      }
      // 对修改树形tree
      editConfigForProps(currentUid, KEY, data);
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
      <Button block type="primary" onClick={editData}>
        输入柱状图数据
      </Button>
      <br />
      <br />
      {showEditMeta && (
        <Button block type="primary" onClick={editMeta}>
          修改柱状图 meta 数据
        </Button>
      )}
      <DialogMonaco
        isModalVisible={isModalVisible}
        cb={cb}
        message="请在下方编辑器输入折线图数据，注意 json 数据格式；右击有格式化代码等辅助功能"
        defaultValue={initialValue}
      ></DialogMonaco>
    </>
  );
};

export default AddDataForChartColumn;
