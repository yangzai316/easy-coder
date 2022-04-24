import { Checkbox, Select } from "antd";

const SetRoute = () => {
  const options = [
    { label: "Apple", value: "1" },
    { label: "Pear", value: "2" },
    { label: "Orange", value: "3" },
  ];
  return (
    <>
      <Checkbox.Group options={options} />
    </>
  );
};

export default SetRoute;
