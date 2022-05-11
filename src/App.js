import { Routes, Route } from "react-router-dom";
import SetPageContent from "./pages/set-page-content";
import SetRoute from "./pages/set-route";
import LeftSider from "./components/LeftSider";
import { Layout } from "antd";
import "./App.css";

const { Sider, Content, Header } = Layout;

const App = () => {
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header>Header</Header>
      <Layout>
        <Sider width="66">
          <LeftSider></LeftSider>
        </Sider>
        <Content>
          <Routes>
            <Route path="/set-page-content" element={<SetPageContent />} />
            <Route path="/set-route" element={<SetRoute />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
