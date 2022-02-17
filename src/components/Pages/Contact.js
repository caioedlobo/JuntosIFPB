import React from "react";
import Navbar from "../atoms/Navbar";
import classes from "./stylesheet/Home.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import Box from "@mui/material/Box";
import { TextField } from "@material-ui/core";
import ButtonGroupLogin from "../atoms/ButtonGroupLogin";

const Contact = () => {
  return (
    <div data-testid="contact">
      <header>
        <Navbar />
      </header>

      <div className={classes.form} style={{ width: "720px", height: "680px" }}>
        <img src={imageContact} style={{ width: "250px" }}></img>
        <Box>
          <div style={{ paddingTop: "50px" }}>
            Para mais informações sobre o Projeto ou para sugerir melhorias no
            site, entre em contato através do email abaixo:
          </div>
          <TextField
            placeholder="Email"
            variant="outlined"
            style={{ width: "100%", paddingTop: "50px" }}
          >
            Email
          </TextField>
          <TextField
            style={{ width: "100%", paddingTop: "50px" }}
            placeholder="Comentário"
            multiline
            rows={4}
            variant="outlined"
          ></TextField>
          <ButtonGroupLogin style={{ width: "50%", paddingTop: "50px" }}>
            Enviar
          </ButtonGroupLogin>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
