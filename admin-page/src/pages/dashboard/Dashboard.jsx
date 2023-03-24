import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NewCompany from "../../components/new-company/NewCompany";
import TableItems from "../../components/tableItems/TableItems";
import { logout } from "../../redux/slices/auth/AuthSlice";
import "./css/dashboard.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-page__top">
        <h2 className="dashboard-page__top__title">List Company:</h2>
        <Button variant="contained" onClick={handleClickOpenDialog}>New Company</Button>
      </div>
      <TableItems />
      <NewCompany
        open={openDialog}
        handleClose={handleClose}
      />
    </div>
  );
};

export default HomePage;
