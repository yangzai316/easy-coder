import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3342774_22429jvg2fk.js",
});

export default ({ children, fontSize, color }) => (
  <IconFont
    type={children}
    style={{
      fontSize: `${fontSize || 30}px`,
      color: `${color || "#333"}`,
    }}
  />
);
