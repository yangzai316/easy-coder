import "./../../../style/native-style-config.scss";

const NativeStyleConfig = () => {
  return (
    <div className="nsc-container">
      <input className="nsc-container-margin-left" placeholder="left" />
      <input className="nsc-container-margin-right" placeholder="right" />
      <input className="nsc-container-margin-top" placeholder="外边距-top" />
      <input className="nsc-container-margin-bottom" placeholder="bottom" />
      <input className="nsc-container-border-left" placeholder="left" />
      <input className="nsc-container-border-right" placeholder="right" />
      <input className="nsc-container-border-top" placeholder="边框-top" />
      <input className="nsc-container-border-bottom" placeholder="bottom" />
      <input className="nsc-container-padding-left" placeholder="left" />
      <input className="nsc-container-padding-right" placeholder="right" />
      <input className="nsc-container-padding-top" placeholder="内边距-top" />
      <input className="nsc-container-padding-bottom" placeholder="bottom" />
    </div>
  );
};

export default NativeStyleConfig;
