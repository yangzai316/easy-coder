import { Routes, Route } from "react-router-dom";
import SetPageContent from "./pages/set-page-content";
import SetRoute from "./pages/set-route";
import LeftSider from "./components/LeftSider";
import SetProject from "./pages/set-project.js";
import { Layout } from "antd";
import "./App.css";

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
          <Route path="/set-page-content" element={<SetPageContent />} />
          <Route path="/set-route" element={<SetRoute />} />
          <Route path="/set-project" element={<SetProject />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
