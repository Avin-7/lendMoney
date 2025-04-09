import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

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
function Navbar() {
  return (
    <>
      <Header className="bg-white grid grid-cols-3 ">
        <div className="demo-logo text-white col-span-2">LendMoney</div>
        <Menu className="" theme="dark" mode="horizontal" items={items} />
      </Header>
    </>
  );
}

export default Navbar;
