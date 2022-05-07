import { Line, Column } from "@ant-design/plots";
/**
 *
 * 折线图的二次封装
 */
export const ChartLine = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Line {...props}></Line>
    </div>
  );
};
/**
 *
 * 柱状图的二次封装
 */
export const ChartColumn = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Column {...props}></Column>
    </div>
  );
};
