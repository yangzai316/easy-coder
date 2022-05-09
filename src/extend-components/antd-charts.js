import { Line, Column, Pie, Gauge, Liquid ,Radar,Stock} from "@ant-design/plots";
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
/**
 *
 * 饼图的二次封装
 */
export const ChartPie = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Pie {...props}></Pie>
    </div>
  );
};
/**
 *
 * 仪表盘的二次封装
 */
export const ChartGauge = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Gauge {...props}></Gauge>
    </div>
  );
};
/**
 *
 * 水波图的二次封装
 */
export const ChartLiquid = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Liquid {...props}></Liquid>
    </div>
  );
};

/**
 *
 * 基础雷达图的二次封装
 */
 export const ChartRadar = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Radar {...props}></Radar>
    </div>
  );
};
/**
 *
 * 基础蜡烛图的二次封装
 */
export const ChartStock = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid} key={+new Date()}>
      <Stock {...props}></Stock>
    </div>
  );
};
