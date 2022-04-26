import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3342774_uxx3ii5eunq.js",
});

const EasyIcon = ({ children, fontSize, color }) => {
  return (
    <>
      {children ? (
        <IconFont
          type={children}
          style={{
            fontSize: `${fontSize || 30}px`,
            color: `${color || "#333"}`,
          }}
        />
      ) : (
        "Icon丢失"
      )}
    </>
  );
};
export default EasyIcon;
