import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/imgs/404.svg";
import "./scss/not-found.scss";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-text">Page not found</h1>
      <img src={notFoundImage} alt="404_image" />
      <div className="btn-back-home">
        <Link to="/">Back To Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
