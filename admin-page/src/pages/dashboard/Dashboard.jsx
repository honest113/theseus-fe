import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import TableItems from "../../components/tableItems/TableItems";
import { logout } from "../../redux/slices/auth/AuthSlice";
import './css/dashboard.scss'

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="dashboard-page">
      <div className="dashboard-page__top">
        <h2 className="dashboard-page__top__title">List Company:</h2>
        <Button variant="contained">New Company</Button>
      </div>
      <TableItems />
    </div>
  );
};

export default HomePage;
