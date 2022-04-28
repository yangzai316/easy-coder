import * as Antd from "antd";

const Collapse = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid}>
      <Antd.Collapse {...props}></Antd.Collapse>
    </div>
  );
};

export default Collapse;
