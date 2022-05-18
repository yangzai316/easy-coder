import "./../../../style/easy-header.scss";

const Header = ({ data }) => {
  return (
    <div className="easy-header">
      <span>
        路由管理-当前项目为 {data.projectName}（ID:
        {data.uid}）
      </span>
    </div>
  );
};
export default Header;
