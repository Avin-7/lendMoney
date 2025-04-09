import React from "react";
import { Layout, theme } from "antd";
const { Content, Footer } = Layout;

import { Link } from "react-router";

const items = [
  {
    key: 1,
    label: <Link to={"/"}>Home</Link>,
  },
  {
    key: 2,
    label: <Link to={"/login"}>Login</Link>,
  },
  {
    key: 3,
    label: <Link to={"/signup"}>Signup</Link>,
  },
  {
    key: 4,
    label: <Link to={"/profile"}>Profile</Link>,
  },
  {
    key: 5,
    label: <Link to={"/portfolio"}>Portfolio</Link>,
  },
  {
    key: 6,
    label: <Link to={"/loan"}>Loan</Link>,
  },
];
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>

    </Layout>
  );
};
export default App;
