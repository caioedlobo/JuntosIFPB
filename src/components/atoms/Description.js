import React from "react";
import classes from "./stylesheet/Description.module.css";

const Description = () => {
  return (
    <div className={classes.box} data-testid="description">
      <h2 className={classes.title}>Bem-vindo ao Juntos pelo IFPB</h2>

      <p className={classes.desc}>
        Um sistema de Gestão Colaborativa para a comunidade do IFPB campus
        Campina Grande
      </p>
    </div>
  );
};

export default Description;
