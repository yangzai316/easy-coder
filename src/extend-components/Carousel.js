import * as Antd from "antd";

const Carousel = ({ "data-uid": dataUid, height, options, ...props }) => {
  return (
    <div data-uid={dataUid}>
      <Antd.Carousel {...props}>
        {options.map((item, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  height,
                  backgroundColor: `${item.backgroundColor || "#ccc"}`,
                  backgroundImage: `url(${item.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>{" "}
            </div>
          );
        })}
      </Antd.Carousel>
    </div>
  );
};

export default Carousel;
