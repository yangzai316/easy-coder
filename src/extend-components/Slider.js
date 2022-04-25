import * as Antd from "antd";

const Slider = ({ "data-uid": dataUid, ...props }) => {
  return (
    <div data-uid={dataUid}>
      <Antd.Slider {...props}> </Antd.Slider>
    </div>
  );
};

export default Slider;
