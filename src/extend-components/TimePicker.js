import * as Antd from "antd";

const TimePicker = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} style={{ display: "inline-flex" }}>
      <Antd.TimePicker {...props}> </Antd.TimePicker>
    </div>
  );
};

export default TimePicker;
