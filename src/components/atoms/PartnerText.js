import React from "react";
import classes from "./stylesheet/PartnerTitle.module.css";
const PartnerText = (props) => {
  return (
    <div data-testid="partner-text" className={classes.lineHeight}>
      <p>{props.children}</p>
    </div>
  );
};

export default PartnerText;
