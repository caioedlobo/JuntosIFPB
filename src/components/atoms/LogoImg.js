import React from "react";
import image from "../../assets/undraw_team_collaboration_re_ow29-3.svg";


const LogoImg = () => {
  return (
    /* <Box sx={{backgroundImage: {image},  backgroundSize: "contain", width: "500px"}}> */
    <img
      data-testid="logo-img"
      src={image}
      /* className={classes.mainImage} */
      alt="logoImg"
      style={{display: "flex", /* background: "red", */ width: "100%"}}
    />
    /* </Box> */
    
    
  );
};

export default LogoImg;
