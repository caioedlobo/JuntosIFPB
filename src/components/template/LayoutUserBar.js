import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "@mui/material";

const LayoutUserBar = (props) => {
  /* console.log(props.linkTo) */
  
  return <div data-testid='layout-user-bar'>

    <Link to={props.linkTo}
                
                sx={{
                  display: {md: "flex", sm: "flex", xs: "none"},
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: { md: "flex-start", xs: "center" },
                  marginBottom: "15px"
                  
                }}
               
              >
                {props.children}
                {props.chilfren}
                <ArrowForwardIosIcon
                  sx={{
                    display: { md: "block", xs: "none", marginLeft: "auto" },
                  }}
                />
              </Link>
  </div>
}

export default LayoutUserBar