import "./navigation.styles.scss";
import React, { useState } from "react";
import { AreaChartOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link, Outlet } from "react-router-dom";
import Exit from "../../assets/exit.png";
import { MdHomeFilled } from "react-icons/md";
import { BsCoin, BsCurrencyExchange, BsNewspaper } from "react-icons/bs";
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
          <Link to="/" onClick={() => setOpen(!open)}>
            <h1>Crypto World</h1>
          </Link>
        </div>

        <ul className="menu-container">
          <Link to="/" onClick={() => setOpen(!open)}>
            <MdHomeFilled size={30} color="white" />
            Home
          </Link>
          <Link to="/cryptocurrencies" onClick={() => setOpen(!open)}>
            <BsCoin size={30} color="white" />
            Cryptocurrencies
          </Link>
          <Link to="/exchanges" onClick={() => setOpen(!open)}>
            <BsCurrencyExchange size={30} color="white" />
            Exchanges
          </Link>
          <Link to="/news" onClick={() => setOpen(!open)}>
            <BsNewspaper size={30} color="white" /> News
          </Link>
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
