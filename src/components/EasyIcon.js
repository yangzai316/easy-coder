import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3342774_6lv9cep7n26.js",
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
        <span style={{ color: "red" }}>Icon丢失</span>
      )}
    </>
  );
};
export default EasyIcon;
