import "./navigation.styles.scss";
import React, { useState } from "react";
import { AreaChartOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link, Outlet } from "react-router-dom";
import Exit from "../../assets/exit.png";
const Navigation = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className={`navigation-container ${!open ? "close" : ""}`}>
        <div className="logo">
          <Avatar
            size={80}
            icon={<AreaChartOutlined />}
            style={{ backgroundColor: "transparent", color: "white" }}
          />
          <h1>Crypto World</h1>
        </div>
        <ul className="menu-container">
          <Link to="/">Home</Link>

          <Link to="/cryptocurrencies">Cryptocurrencies</Link>

          <Link to="/exchanges">Exchanges</Link>

          <Link to="/news">News</Link>
        </ul>
        <img src={Exit} className="cross" onClick={() => setOpen(!open)} />
      </div>
      <div className="navbar-smalldevice">
        <h1>Crypto World</h1>
        <img
          src="https://img.icons8.com/ios-filled/25/000000/menu--v1.png"
          className="hamburger"
          onClick={() => setOpen(!open)}
        />
      </div>

      <Outlet />
    </>
  );
};
export default Navigation;
