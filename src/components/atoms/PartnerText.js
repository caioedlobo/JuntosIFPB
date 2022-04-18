import { Typography } from "@mui/material";
import React from "react";
import classes from "./stylesheet/PartnerTitle.module.css";
const PartnerText = (props) => {
  return (
    <div data-testid="partner-text" className={classes.lineHeight}>
      {/* <p>{props.children}</p> */}
      <Typography sx={{paddingTop: "30px"}}>{props.children}</Typography>
    </div>
  );
};

export default PartnerText;
