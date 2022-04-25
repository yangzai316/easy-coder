import * as Antd from "antd";

const Rate = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid}>
      <Antd.Rate {...props}> </Antd.Rate>
    </div>
  );
};

export default Rate;
