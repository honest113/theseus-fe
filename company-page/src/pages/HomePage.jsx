import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import BoxContent from "../components/box-content/BoxContent";
import General from "../components/general/General";
import "./css/home-page.scss";

const navItems = ["General", "Team"];

const HomePageTopBar = ({ currPage, setCurrPage }) => {
  return (
    <div className="top-bar-content">
      {navItems.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          className={currPage === index ? "active" : ""}
        >
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => setCurrPage(index)}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
};

const HomePage = () => {
  const [currPage, setCurrPage] = useState(0);

  const renderSwitch = () => {
    switch(currPage) {
      case 0:
        return <General />;
      case 1:
        return <></>;
      default:
        return <General />;
    }
  };

  return (
    <div className="home-page">
      <div className="top-bar">
        <HomePageTopBar currPage={currPage} setCurrPage={setCurrPage} />
      </div>
      <div className="home-page-content">
        {renderSwitch()}
      </div>
    </div>
  );
};

export default HomePage;
