import { Routes, Route } from "react-router-dom";
import SetPageContent from "./pages/set-page-content";
import SetRoute from "./pages/set-route";
import LeftSider from "./components/left-sider";
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
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
          <Routes>
            <Route path="/set-page-content" element={<SetPageContent />} />
            <Route path="/set-route" element={<SetRoute />} />
          </Routes>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
