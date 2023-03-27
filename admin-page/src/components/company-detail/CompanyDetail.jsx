import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide
} from "@mui/material";
import React, { useState } from "react";
import AddCompanyAccount from "./company-account/AddCompanyAccount";
import CompanyAccountTable from "./company-account/CompanyAccountTable";
import CompanyMerchantTable from "./company-merchant/CompanyMerchantTable";
import "./css/company-detail.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CompanyDetail = ({ open, handleClose, company }) => {
  const [isMerchant, setIsMerchant] = useState(true);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseAddCompanyAccount = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="company-detail-dialog"
      >
        <DialogTitle fontWeight="bold">{"Company Detail"}</DialogTitle>
        <div className="company-detail-top">
          <div>
            {!isMerchant && (
              <Button variant="contained" onClick={handleClickOpenDialog}>
                Add Company Account
              </Button>
            )}
          </div>
          <div class="toggle-change" v-show="showToggle">
            <div
              class={`toggle-option ${
                !isMerchant ? "toggle-option-active" : ""
              }`}
            >
              Company Account
            </div>
            <input
              type="checkbox"
              class="toggle-checkbox"
              checked={isMerchant}
              onChange={() => setIsMerchant(!isMerchant)}
            />
            <div
              class={`toggle-option ${
                isMerchant ? "toggle-option-active" : ""
              }`}
            >
              Merchant
            </div>
          </div>
        </div>
        <DialogContent>
          {isMerchant ? (
            <CompanyMerchantTable company={company} />
          ) : (
            <CompanyAccountTable company={company} />
          )}
        </DialogContent>
      </Dialog>
      <AddCompanyAccount
        open={openDialog}
        handleClose={handleCloseAddCompanyAccount}
        companyId={company.companyId}
      />
    </div>
  );
};

export default CompanyDetail;
