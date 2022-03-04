import React from "react";

import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Contact.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import { TextField } from "@material-ui/core";
import ButtonGroupLogin from "../atoms/ButtonGroupLogin";
import Layout from "../template/Layout";

const Contact = () => {
  return (
    <Layout>
      <div
        data-testid="contact"
        className={`${classesCommon.form} ${classes.formContact}`}
      >
        <img src={imageContact} style={{ width: "350px" }}></img>

        <div style={{ marginTop: "40px", lineHeight: "1.5" }}>
          Para mais informações sobre o Projeto ou para sugerir melhorias no
          site, entre em contato conosco através do email
          juntosifpb2020@gmail.com ou pelo formulário abaixo:
        </div>
        <TextField
          placeholder="Email"
          variant="outlined"
          style={{ width: "100%", marginTop: "50px" }}
        >
          Email
        </TextField>
        <TextField
          style={{ width: "100%", marginTop: "28px" }}
          placeholder="Comentário"
          multiline
          rows={4}
          variant="outlined"
        ></TextField>
        <div className={classes.buttonWrapper}>
          <ButtonGroupLogin>Enviar</ButtonGroupLogin>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
