import "./navigation.styles.scss";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import { AreaChartOutlined } from "@ant-design/icons";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="logo">
          <Avatar
            size={70}
            icon={<AreaChartOutlined />}
            style={{ backgroundColor: "transparent", color: "white" }}
          />
          <p>Crypto World</p>
        </div>
        <Menu theme="dark">
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
