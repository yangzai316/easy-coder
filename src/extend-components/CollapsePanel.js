import * as Antd from "antd";

const CollapsePanel = ({ "data-uid": dataUid, ...props }) => {
  return (
    <Antd.Collapse.Panel dataUid={dataUid} {...props}></Antd.Collapse.Panel>
  );
};

export default CollapsePanel;
