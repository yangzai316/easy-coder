import { ELEMENT_ALL } from "./../../data/ELEMENT";
const { Button, Container } = ELEMENT_ALL;

const SetRoute = () => {
  return (
    <Container
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: "4px",
        overflow: "auto",
      }}
    >
      <Button style={{}} content="按钮1"></Button>
      <Button style={{}} content="按钮2"></Button>
    </Container>
  );
};
export default SetRoute;
// Button多了
//
