import { Box } from "@mui/material";
import React from "react";
import classes from "./stylesheet/PartnerTitle.module.css";
const PartnerTitle = (props) => {
  return (
    <Box sx={{textAlign: {md: "start", sm:"center"}}}
      data-testid="partner-title"
      className={`${classes.title} ${classes.lineHeight}`}
    >
      <p>{props.children}</p>
    </Box>
  );
};

export default PartnerTitle;
