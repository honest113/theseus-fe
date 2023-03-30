import React from "react";
import BoxContent from "../box-content/BoxContent";
import "./css/general.scss";

const listMerchants = [1, 2, 3, 4, 5];

const General = () => {
  return (
    <div>
      <BoxContent title="General">
        <div className="general-content">
          <div className="key">
            <div className="company-name">Name</div>
            <div className="company-phone">Phone Number</div>
            <div className="company-type">Type</div>
            <div className="company-status">Status</div>
            <div className="company-address">Address</div>
            <div className="company-description">Description</div>
          </div>
          <div className="value">
            <div className="company-name">Value</div>
            <div className="company-phone">Value</div>
            <div className="company-type">Value</div>
            <div className="company-status">Value</div>
            <div className="company-address">Value</div>
            <div className="company-description">Value</div>
          </div>
        </div>
      </BoxContent>
      <BoxContent title="Merchants">
        <div className="merchant">
          <div className="merchant-title">
            <div className="merchant-title-name">MERCHANT NAME</div>
            <div className="merchant-title-status">STATUS</div>
          </div>
          <div className="merchant-content">
            {listMerchants.map((merchant, index) => (
              <div
                className={`merchant-item ${index % 2 !== 0 ? "bg-gray" : ""}`}
              >
                <div className="merchant-content-name">Merchant 1</div>
                <div className="merchant-content-status">APPROVED</div>
              </div>
            ))}
          </div>
        </div>
      </BoxContent>
    </div>
  );
};

export default General;
