import Container from "../components/Container";
import { Layout } from "antd";

const ORIGIN_TREE = {
  "id-root": {
    id: "id-root",
    name: "Container",
    component: Container,
    style: {
      width: "100%",
      height: "100%",
    },
    children: [],
  },
};
export default ORIGIN_TREE;
