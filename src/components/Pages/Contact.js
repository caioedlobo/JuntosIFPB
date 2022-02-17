import React from "react";
import Navbar from "../atoms/Navbar";
import classes from "./stylesheet/Home.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import Box from "@mui/material/Box";
import { TextField } from "@material-ui/core";
import ButtonGroupLogin from "../atoms/ButtonGroupLogin";

const Contact = () => {
  return (
    <div
      data-testid="contact"
      className={classes.background}
      style={{ paddingLeft: "30%", paddingTop: "8%" }}
      style={{
        justifyContent: "center",
        display: "flex",
        paddingTop: "6%",
        /* position: "relative", */
      }}
    >
      <header>
        <Navbar />
      </header>

      <div
        className={classes.form}
        style={{
          width: "600px",
          height: "580px",
          justifyContent: "center",

          /* position: "absolute",
          top: "50%", */
        }}
      >
        <img src={imageContact} style={{ width: "250px" }}></img>
        <Box>
          <div style={{ paddingTop: "40px" }}>
            Para mais informações sobre o Projeto ou para sugerir melhorias no
            site, entre em contato conosco através do email
            juntosifpb2020@gmail.com ou pelo formulário abaixo:
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
          <div
            style={{
              width: "30%",
              justifyContent: "center",

              /* paddingTop: "50px",
              paddingLeft: "228px", */
              margin: "auto",
              paddingTop: "30px",
            }}
          >
            <ButtonGroupLogin>Enviar</ButtonGroupLogin>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
