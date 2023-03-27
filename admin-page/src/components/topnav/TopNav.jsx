import React, { useState } from "react";
import "./topNav.scss";
import images from "../../assets/imgs/user1.jpg";
import { Link } from "react-router-dom";
import UserInfo from "../user-info/UserInfo";

const TopNav = () => {
  const [sideBarStatus, setSideBarStatus] = useState(0);
  const [boxInfoState, setBoxInfoState] = useState(false);

  const hideSideBar = () => {
    if (sideBarStatus === 0) {
      document.querySelector(".sidebar").classList.add("hide");
      document.querySelector(".topNav").classList.add("hide");
      document.querySelector(".main").classList.add("hide");
      setSideBarStatus(1);
    } else {
      document.querySelector(".sidebar").classList.remove("hide");
      document.querySelector(".topNav").classList.remove("hide");
      document.querySelector(".main").classList.remove("hide");
      setSideBarStatus(0);
    }
  };

  const showBoxInfo = () => {
    setBoxInfoState(!boxInfoState);
  };

  return (
    <div className="topNav">
      <Link to="/" className="topNav__logo">
        <div className="topNav__logo__text active">These Us</div>
      </Link>
      <div className="topNav__content">
        <div className="topNav__content__left">
          <div className="topNav__content__left__btn-toggle">
            <i class="bx bx-menu" onClick={hideSideBar}></i>
          </div>
          <div className="topNav__content__left__about">About</div>
        </div>
        <div className="topNav__content__right">
          <div className="topNav__content__right__chat">
            <i class="bx bx-chat"></i>
          </div>
          <div className="topNav__content__right__envelope">
            <i class="bx bx-envelope"></i>
          </div>
          <div className="topNav__content__right__user">
            <img src={images} alt="" onClick={showBoxInfo} />
            <UserInfo
              show={boxInfoState === true ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
