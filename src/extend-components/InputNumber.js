import * as Antd from "antd";

const InputNumber = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} style={{ display: "inline-block" }}>
      <Antd.InputNumber {...props} />
    </div>
  );
};

export default InputNumber;
