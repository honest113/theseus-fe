import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth/AuthSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>HomePage</div>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
