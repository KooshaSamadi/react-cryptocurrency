import React from "react";
import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./notFound.styles.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="notfound-container">
      <div className="error404">
        <p>404</p>
        <h4>Ooopps.! The Page you were looking for, couldn't be found.</h4>

        <Button type="primary" icon={<RollbackOutlined />} size="large">
          <Link to="/"> Back To Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
