import { Layout } from "antd";
import Header from "./components/header";
import NewRoute from "./components/new-route";

const SetRoute = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header></Header>
      <Layout
        style={{ height: "100%", padding: "24px", backgroundColor: "#fff" }}
      >
        <NewRoute></NewRoute>
      </Layout>
    </Layout>
  );
};

export default SetRoute;
