import React from "react";
import imageLogin from "../../assets/undraw_sign_in_re_o58h.svg";

const ImageLogin = () => {
  return (
    <div data-testid="image-login">
      <img src={imageLogin} width={"200px"}></img>
    </div>
  );
};

export default ImageLogin;
