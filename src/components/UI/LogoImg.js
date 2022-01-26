import React from "react";
import classes from "./LogoImg.module.css";
const LogoImg = () => {
  return (
    <img
      className={classes.img}
      src="https://image.canva.com/NO9R2FNYPUtKEerouoyCRg%3D%3D/cSjL9yfxXuSilt0SqgPCBw%3D%3D%3AODAweDc1NA%3D%3D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20220120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220120T152727Z&X-Amz-Expires=82917&X-Amz-Signature=114c507d3c1b8194fa2866e69b0ea33c129e6a28f0c4a228e3432d09a845974b&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2021%20Jan%202022%2014%3A29%3A24%20GMT"
    ></img>
  );
};

export default LogoImg;
