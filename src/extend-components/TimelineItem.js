import * as Antd from "antd";

const TimelineItem = ({ content, ...props }) => {
  return <Antd.Timeline.Item {...props}>{content}</Antd.Timeline.Item>;
};

export default TimelineItem;
