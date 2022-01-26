import React from "react";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <div
      style={{
        paddingLeft: "28px",
      }}
    >
      <h2 className={classes.title}>Bem-vindo ao Juntos pelo IFPB</h2>

      <p className={classes.desc}>
        MUI provides a robust, customizable, and accessible library of
        foundational and advanced components, enabling you to build your own
        design system and develop React applications faster.
      </p>
    </div>
  );
};

export default Description;
