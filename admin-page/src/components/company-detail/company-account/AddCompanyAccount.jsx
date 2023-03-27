/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { adminCreateCompanyAccount } from "../../../apis/company-account/companyAccountApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddCompanyAccount = ({ open, handleClose, companyId }) => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [newCompanyAccount, setNewCompanyAccount] = useState({
    userName: "",
    password: "",
    email: "Company managed",
  });

  // Handle show password
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const ChangeCompanyInfo = (property) => (event) => {
    setNewCompanyAccount({
      ...newCompanyAccount,
      [property]: event.target.value
    });
  };

  const handleAddCompanyAccount = async () => {
    try {
      const companyUpdate = {
        ...newCompanyAccount,
        companyId
      }
      await adminCreateCompanyAccount(companyUpdate);
      alert("Company added!");
      window.location.reload(true);
    } catch (error) {
      alert("Add company failed!");
    }
  };

  return (
    <div className="new-company-page">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter the company name?"}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
            onChange={ChangeCompanyInfo("userName")}
          />
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={newCompanyAccount.password}
              onChange={ChangeCompanyInfo("password")}
              label="Password"
              placeholder="Your password here..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
            onChange={ChangeCompanyInfo("email")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCompanyAccount}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCompanyAccount;
