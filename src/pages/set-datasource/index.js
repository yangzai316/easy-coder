import { Space, Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "别名",
    dataIndex: "name",
    key: "name",
    render: (text) => <Button type="link">{text}</Button>,
  },
  {
    title: "链接",
    dataIndex: "url",
    key: "url",
  },
  {
    title: "方法",
    dataIndex: "method",
    key: "method",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="link">编辑</Button>
        <Button danger type="link">
          删除
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "面试房间列表",
    url: "/interview/query-room-list",
    method: "GET",
    createTime: "2012-12-12 12:11:00",
  },
  {
    key: "2",
    name: "面试官列表",
    url: "/interview/query-interviewer-list",
    method: "GET",
    createTime: "2012-12-12 16:11:00",
  },
];

const SetDataSource = () => (
  <div style={{ backgroundColor: "#fff", padding: "12px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <Input
        style={{ width: "200px" }}
        addonAfter={<SearchOutlined />}
        placeholder="关键字快捷查询"
      />
      <Button type="primary">新增</Button>
    </div>
    <Table bordered columns={columns} dataSource={data} />
  </div>
);

export default SetDataSource;
