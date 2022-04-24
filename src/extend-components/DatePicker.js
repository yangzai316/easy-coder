import * as Antd from "antd";

const DatePicker = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} style={{ display: "inline-flex" }}>
      <Antd.DatePicker {...props}> </Antd.DatePicker>
    </div>
  );
};

export default DatePicker;
