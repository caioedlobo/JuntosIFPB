import React from "react";
import Navbar from "../atoms/Navbar";
import classes from "./stylesheet/Home.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import Box from "@mui/material/Box";
import { TextField } from "@material-ui/core";

const Contact = () => {
  return (
    <div data-testid="contact">
      <header>
        <Navbar />
      </header>
      <p>
        Para mais informações sobre o Projeto ou para sugerir melhorias no site,
        entre em contato através do email abaixo:{" "}
      </p>
      <div className={classes.form} style={{ width: "968px" }}>
        <img src={imageContact} style={{ width: "250px" }}></img>
        <Box>
          <div>
            Para mais informações sobre o Projeto ou para sugerir melhorias no
            site, entre em contato através do email abaixo:
          </div>
          <TextField style={{ width: "100%" }} variant="outlined" multiline>
            lorem ipsum
          </TextField>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
