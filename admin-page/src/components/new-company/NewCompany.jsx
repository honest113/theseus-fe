/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./css/new-company.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { companyStatus, manageCatalogues } from "../../constants/company";
import { adminCreateCompany, adminRetrieveListCompany } from "../../apis/company/companyApi";
import { loadListCompany } from "../../redux/slices/company/CompanySlice";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NewCompany = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const [newCompany, setNewCompany] = useState({
    name: "",
    phoneNumber: "",
    manageCatalogue: "Company managed",
    companyStatus: "NOT ACTIVE",
    address: "",
    description: ""
  });

  const ChangeCompanyInfo = (property) => (event) => {
    setNewCompany({
      ...newCompany,
      [property]: event.target.value
    });
  };

  const getListCompany = async () => {
    const res = await adminRetrieveListCompany();
    if (res.data.success) {
      dispatch(loadListCompany(res.data.data));
    }
  };

  const AddCompany = async () => {
    try {
      await adminCreateCompany(newCompany);
      getListCompany();
      alert("Company added!");
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
            label="Company Name"
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
            onChange={ChangeCompanyInfo("name")}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
            onChange={ChangeCompanyInfo("phoneNumber")}
          />
          <Box>
            <FormControl sx={{ m: 1 }} fullWidth>
              <Select
                variant="outlined"
                value={newCompany.manageCatalogue}
                onChange={ChangeCompanyInfo("manageCatalogue")}
              >
                {manageCatalogues.map((item) => (
                  <MenuItem value={item.service}>{item.text}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ m: 1 }} fullWidth>
              <Select
                variant="outlined"
                value={newCompany.companyStatus}
                onChange={ChangeCompanyInfo("companyStatus")}
              >
                {companyStatus.map((item) => (
                  <MenuItem value={item.service}>{item.text}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
            onChange={ChangeCompanyInfo("address")}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            sx={{ m: 1 }}
            onChange={ChangeCompanyInfo("description")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={AddCompany}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewCompany;
