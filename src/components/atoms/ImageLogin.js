import React from "react";
/* import imageLogin from "../../assets/undraw_sign_in_re_o58h.svg"; */

const ImageLogin = () => {
  return (
    <div data-testid="image-login">
      <img
        /* src={imageLogin}  */
        src={"https://avatars.githubusercontent.com/u/2523928?s=280&v=4"}
        alt="ifLogo"
        width={"100px"}
        style={{
          marginTop: "40px",
        }}

        /* width={"200px"} */
      ></img>
    </div>
  );
};

export default ImageLogin;
