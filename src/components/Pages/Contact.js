import React, {useState} from "react";

import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Contact.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import { Box, Button } from "@mui/material";
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
      <Box sx={{display: "flex", flexDirection: "column", width: {sm:"560px", xs: "350px"}, height: "max-content",/*  padding: "28px 24px" */}}>
      <form
        data-testid="contact"
        className={`${classesCommon.form}`}
        onSubmit={(e) => {
          e.preventDefault();
          
         /*  Axios({method: "post",
          url: 'http://localhost:3001/api/contato',
          
          headers: {'Content-Type' : 'application/json' },
          body: {"testing": "123"}
         })
         
          .then( (res) => {console.log(res)})
        .catch( (error) =>{
          console.log(error);
          
        }) */
        Axios.post("http://localhost:3001/api/contato", {
          email: emailData,
          description: descriptionData
        })
        }}
         
      >
        
          <Box sx={{textAlign: "center", marginBottom: "15px", backgroundSize: 'contain'}}>
        <img
          src={imageContact}
          alt="imageContact"
          style={{ width: "80%", marginTop: "15px" }}
        ></img>
        </Box>

        <div style={{lineHeight: "1.5" }}>
          Para mais informações sobre o Projeto ou para sugerir melhorias no
          site, entre em contato conosco através do email
          juntosifpb@gmail.com ou pelo formulário abaixo:
        </div>
        <EmailContactField emailData={getEmailData}/>
        <DescriptionContactField descriptionData={getDescriptionData}/>
        <div className={classes.buttonWrapper}>
          <Button type="submit">Enviar</Button>
        </div>
        
      </form>
      </Box>
    </Layout>
  );
};

export default Contact;
