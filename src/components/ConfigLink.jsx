import React, { useState } from "react";
import "../styles/configLink.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";

const ConfigLink = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState("deposit");

  const handleSelect = (type) => {
    setSelectedType(type);
    onSelect(type);
  };

  const getNavLinkStyle = (type) => ({
    backgroundColor: selectedType === type ? "#e0e0e0" : "transparent",
    padding: "8px",
    borderRadius: "4px",
  });

  return (
    <div className="container">
      <div className="links">
        <Tooltip title="Deposits" arrow>
          <NavLink
            to=""
            className="navLink"
            onClick={() => handleSelect("deposit")}
            style={getNavLinkStyle("deposit")}
          >
            <AccountBalanceRoundedIcon />
          </NavLink>
        </Tooltip>

        <Tooltip title="Withdrawals" arrow>
          <NavLink
            to=""
            className="navLink"
            onClick={() => handleSelect("withdraw")}
            style={getNavLinkStyle("withdraw")}
          >
            <PaidRoundedIcon />
          </NavLink>
        </Tooltip>

        <Tooltip title="Special Transactions" arrow>
          <NavLink
            to=""
            className="navLink"
            onClick={() => handleSelect("special")}
            style={getNavLinkStyle("special")}
          >
            <SellRoundedIcon />
          </NavLink>
        </Tooltip>
      </div>
    </div>
  );
};

export default ConfigLink;