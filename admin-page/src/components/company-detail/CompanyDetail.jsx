import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import React, { useState } from "react";
import CompanyMerchantTable from "./company-merchant/CompanyMerchantTable";
import "./css/company-detail.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CompanyDetail = ({ open, handleClose, company }) => {
  const [isMerchant, setIsMerchant] = useState(true);

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
        <div class="toggle-change" v-show="showToggle">
          <div
            class={`toggle-option ${!isMerchant ? "toggle-option-active" : ""}`}
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
            class={`toggle-option ${isMerchant ? "toggle-option-active" : ""}`}
          >
            Merchant
          </div>
        </div>
        <DialogContent>
          <CompanyMerchantTable company={company} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompanyDetail;
