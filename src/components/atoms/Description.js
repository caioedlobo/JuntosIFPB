import { Box, Typography } from "@mui/material";
import React from "react";
/* import classes from "./stylesheet/Description.module.css"; */

const Description = () => {
  return (
    <Box data-testid="description" sx={{color: "white"}}>
      <Typography /* className={classes.title} */
      sx={{
        marginBottom: "40px",
        fontSize: {xl:"49px", lg: "40px", md: "38px", sm: "38px" },
        
      }}
      >Participe do Juntos pelo IFPB</Typography>

      <Typography /* className={classes.desc} */ 
      sx={{
        fontSize: {xl:"22px", lg: "22px", md: "20px", sm: "20px" },
        lineHeight: "1.5"
      }}
      >
        Um sistema de Gestão Colaborativa para a comunidade do IFPB campus
        Campina Grande
      </Typography>
    </Box>
  );
};

export default Description;
