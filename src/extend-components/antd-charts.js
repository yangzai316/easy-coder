import { Line } from "@ant-design/plots";

export const ChartLine = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Line {...props}></Line>
    </div>
  );
};
