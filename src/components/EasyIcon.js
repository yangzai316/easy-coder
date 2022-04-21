import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3342774_v3yl26zhrun.js",
});

export default ({ children, fontSize, color }) => (
  <IconFont
    type={children}
    style={{
      fontSize: `${fontSize || 30}px`,
      color: `${color || "#666"}`,
    }}
  />
);
