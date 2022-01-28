import React from "react";
import image from "../assets/undraw_team_collaboration_re_ow29-3.svg";

import classes from "../App.module.css";

const LogoImg = () => {
  return <img src={image} className={classes.mainImage} alt="logoImg" />;
};

export default LogoImg;
