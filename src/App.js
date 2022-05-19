import { Routes, Route } from "react-router-dom";
import LeftSider from "./components/LeftSider";
import { Layout } from "antd";
import "./App.css";
import router from "./router";

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider width="66">
        <LeftSider></LeftSider>
      </Sider>
      <Content>
        <Routes>
          {router.map((item) => {
            return (
              <Route key={item.key} path={item.key} element={item.element} />
            );
          })}
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
