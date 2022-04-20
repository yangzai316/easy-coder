import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3342774_vi9hjq2kmwf.js",
});

export default ({ children, fontSize }) => (
  <IconFont
    type={children}
    style={{
      fontSize: `${fontSize}px`,
    }}
  />
);
