import React from "react";
import classes from "./stylesheet/PartnerTitle.module.css";
const PartnerTitle = (props) => {
  return (
    <div
      data-testid="partner-title"
      className={`${classes.title} ${classes.lineHeight}`}
    >
      <p>{props.children}</p>
    </div>
  );
};

export default PartnerTitle;
