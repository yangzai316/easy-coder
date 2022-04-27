import * as Antd from "antd";

const Calendar = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid}>
      <Antd.Calendar {...props}></Antd.Calendar>
    </div>
  );
};

export default Calendar;
