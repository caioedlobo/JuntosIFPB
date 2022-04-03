import React, {useState} from "react";

import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Contact.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import { Button } from "@mui/material";
import Layout from "../template/Layout";
import EmailContactField from "../atoms/EmailContactField"
import DescriptionContactField from "../atoms/DescriptionContactField";


import Axios from "axios"

const Contact = () => {
  
  const [emailData, setEmailData] = useState();
  const [descriptionData, setDescriptionData] = useState();

  const getEmailData = (emailData) => {
    
    setEmailData(emailData)
  }

  const getDescriptionData = (descriptionData) => {
    
    setDescriptionData(descriptionData)
  }

  return (
    <Layout>
      <form
        data-testid="contact"
        className={`${classesCommon.form} ${classes.formContact}`}
        onSubmit={(e) => {
          e.preventDefault();
          const contactData = {
            emailData: emailData,
            descriptionData: descriptionData
          }
          
          Axios.post("https://localhost:3000/api/contato", contactData)
          .then( (res) => {console.log(res.contactData)});
        }}  
      >
        <img
          src={imageContact}
          alt="imageContact"
          style={{ width: "350px" }}
        ></img>

        <div style={{ marginTop: "40px", lineHeight: "1.5" }}>
          Para mais informações sobre o Projeto ou para sugerir melhorias no
          site, entre em contato conosco através do email
          juntosifpb2020@gmail.com ou pelo formulário abaixo:
        </div>
        <EmailContactField emailData={getEmailData}/>
        <DescriptionContactField descriptionData={getDescriptionData}/>
        <div className={classes.buttonWrapper}>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
