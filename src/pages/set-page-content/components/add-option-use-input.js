import React from "react";
import { Form, Input, Button, Space, notification } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { editConfigForProps } from "../../../helper";
import ORIGIN_TREE from "../../../data/origin-tree";

const AddOptionUseInput = () => {
  return (
    <>
      <Input.TextArea
        rows={18}
        placeholder={`请使用 value、label、children 组成的json结构的数据。
比如：
[
	{
		value: 'a',
		label: 'AA',
		children: [
			{
				value: 'b',
				label: 'BB',
				children: []
			}
		]
	},
]
      `}
      />
      <Button block type="primary" htmlType="submit">
        确定
      </Button>
    </>
  );
};

export default AddOptionUseInput;
