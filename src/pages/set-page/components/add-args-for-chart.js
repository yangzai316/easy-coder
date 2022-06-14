import React, { useState, useRef } from "react";
import { Button, notification } from "antd";
import { editConfigForProps, editConfigForDataSource } from "../../../helper";
import { isObject } from "../../../utils";
import ORIGIN from "../../../data/ORIGIN_TREE";
import DialogMonaco from "./dialog-monaco";
import SetDataUseApi from "./set-data-use-api";

let KEY = "";

const AddArgsForChart = ({ currentUid, updateView, otherArgs = [] }) => {
  // 操作 dialog
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  // 修改数据源 data
  const editData = () => {
    KEY = "data";
    setInitialValue(JSON.stringify(ORIGIN.TREE[currentUid]?.props.data));
    setIsModalVisible(true);
  };
  // 修改oher
  const editOther = (arg) => {
    KEY = arg;
    setInitialValue(JSON.stringify(ORIGIN.TREE[currentUid]?.props[arg]));
    setIsModalVisible(true);
  };
  // dialog 回调
  const monacocCb = (visible, val) => {
    setIsModalVisible(visible);
    if (!val) return;
    try {
      const data = JSON.parse(val);
      // 输入数据做简单校验
      if (KEY === "data" || KEY === "yField") {
        if (!Array.isArray(data)) {
          throw new Error("This is not Array");
        }
      } else if (!isObject(data)) {
        throw new Error("This is not Object");
      }
      // 对修改树形tree
      delete ORIGIN.TREE[currentUid].dataSource;
      editConfigForProps(currentUid, KEY, data);
      notification.success({
        message: "添加成功",
        style: { width: "160px" },
        duration: 2,
      });
      updateView();
    } catch (error) {
      console.error("添加失败：格式输入不正确: ", error);
      notification.error({
        message: "添加失败：格式输入不正确",
        duration: 2,
      });
    }
  };
  // api设置
  const API_DRAWER_REF = useRef(null);
  const editApi = () => {
    API_DRAWER_REF.current.show();
  };
  const eventSuccessCb = (val) => {
    if (!val) return;
    editConfigForDataSource(currentUid, val);
    notification.success({
      message: "添加成功",
      style: { width: "160px" },
      duration: 2,
    });
    updateView();
  };
  return (
    <>
      <Button block type="primary" onClick={editData}>
        修改数据源(data)内容
      </Button>

      {otherArgs.map((item) => {
        return (
          <Button
            style={{ marginTop: "10px" }}
            key={item}
            block
            type="primary"
            onClick={() => {
              editOther(item);
            }}
          >
            修改其他({item})配置数据
          </Button>
        );
      })}

      <Button
        style={{ marginTop: "10px" }}
        block
        type="primary"
        onClick={editApi}
      >
        设置接口Api修改数据
      </Button>
      <DialogMonaco
        isModalVisible={isModalVisible}
        cb={monacocCb}
        message="请在下方编辑器输入折线图数据，注意 json 数据格式；右击有格式化代码等辅助功能"
        defaultValue={initialValue}
      ></DialogMonaco>
      <SetDataUseApi
        ref={API_DRAWER_REF}
        successCb={eventSuccessCb}
      ></SetDataUseApi>
    </>
  );
};

export default AddArgsForChart;
