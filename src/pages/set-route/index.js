import { ELEMENT_ALL } from "./../../data/ELEMENT";

import { v4 as uuidv4 } from "uuid";

const Store = window.require("electron-store");
const store = new Store();

const { Button, Container } = ELEMENT_ALL;

const SetRoute = () => {
  const setV = () => {
    const uid = uuidv4();
    const oldMap = store.get("project") || {};
    const newMap = {
      [uid]: {
        uid,
      },
      ...oldMap,
    };
    store.set("project", newMap);
  };
  const clearV = () => {
    console.log(store.clear());
  };
  const getPath = () => {
    console.log(store.clear());
  };
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
      <Button onClick={setV} content="set"></Button>
      <Button onClick={clearV} content="clear"></Button>
    </Container>
  );
};
export default SetRoute;
// Button多了
//
