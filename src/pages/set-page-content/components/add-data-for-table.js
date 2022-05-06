import React, { useState } from "react";
import { Button, notification } from "antd";
import { editConfigForProps } from "../../../helper";
import DialogMonaco from "./dialog-monaco";

const AddOptionUseInput = ({ parentUid, updateView }) => {
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
      editConfigForProps(parentUid, "options", data);
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
        手动输入数据
      </Button>
      <DialogMonaco
        isModalVisible={isModalVisible}
        cb={cb}
        defaultValue={`
[
	{
		"value": "anhui",
		"label": "安徽",
		"children": [
			{
				"value": "luan",
				"label": "六安",
				"children": [
					{
						"value": "xinan",
						"label": "新安"
					},
					{
						"value": "dushan",
						"label": "独山"
					}
				]
			}
		]
	}
]
    
    `}
      ></DialogMonaco>
    </>
  );
};

export default AddOptionUseInput;
