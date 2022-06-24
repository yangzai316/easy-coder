import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: `${process.env.PUBLIC_URL}/font/iconfont.js`,
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
