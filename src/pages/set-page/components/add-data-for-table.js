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
      const { columns, dataSource } = JSON.parse(val);
      if (!Array.isArray(columns) || !Array.isArray(dataSource)) {
        throw new Error();
      }
      editConfigForProps(parentUid, "columns", columns);
      editConfigForProps(parentUid, "dataSource", dataSource);
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
{
  "dataSource": [
    {
      "key": "1",
      "name": "张三",
      "age": 32,
      "address": "西湖区湖底公园1号"
    },
    {
      "key": "2",
      "name": "李四",
      "age": 42,
      "address": "西湖区湖底公园2号"
    }
  ],
  "columns": [
    {
      "title": "姓名",
      "dataIndex": "name",
      "key": "name"
    },
    {
      "title": "年龄",
      "dataIndex": "age",
      "key": "age"
    },
    {
      "title": "住址",
      "dataIndex": "address",
      "key": "address"
    }
  ]
}   
    `}
      ></DialogMonaco>
    </>
  );
};

export default AddDataForTable;
