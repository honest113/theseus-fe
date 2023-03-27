import React from "react";
import "./userInfo.scss";
import image from "../../assets/imgs/user1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth/AuthSlice";

const UserInfo = ({ show }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`box-user ${show === true ? "show" : ""}`}>
      <div className="box-user__top">
        <div className="box-user__top__img">
          <img src={image} alt="" />
        </div>
        <div className="box-user__top__info">
          <span className="box-user__top__info__name">FullName</span>
          <span className="box-user__top__info__email">Email</span>
        </div>
      </div>
      <div className="box-user__logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserInfo;
