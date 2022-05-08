import React, { useState } from "react";

import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Contact.module.css";
import imageContact from "./../../assets/undraw_contact_us_re_4qqt.svg";
import { Box } from "@mui/material";
import Layout from "../template/Layout";
import EmailContactField from "../atoms/EmailContactField";
import LoadingButton from "@mui/lab/LoadingButton";
import DescriptionContactField from "../atoms/DescriptionContactField";
import completeImage from "../../assets/undraw_completing_re_i7ap.svg";

import Axios from "axios";

const Contact = () => {
  const [emailData, setEmailData] = useState();
  const [descriptionData, setDescriptionData] = useState();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [postController, setpostController] = useState(false);

  const getEmailData = (emailData) => {
    setEmailData(emailData);
  };

  const getDescriptionData = (descriptionData) => {
    setDescriptionData(descriptionData);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { sm: "560px", xs: "350px" },
          height: "max-content" /*  padding: "28px 24px" */,
        }}
      >
        {isEmailSent ? (
          <div className={`${classesCommon.form}`}>
            <p style={{ marginTop: "50px", marginBottom: "30px" }}>
              Obrigado! Sua mensagem foi enviada.
            </p>
            <img
              src={completeImage}
              alt="complete"
              style={{ width: "300px", marginBottom: "50px" }}
            ></img>
          </div>
        ) : (
          <form
            data-testid="contact"
            className={`${classesCommon.form}`}
            onSubmit={(e) => {
              e.preventDefault();
              setpostController(true);

              Axios.post(
                "https://backendjuntosifpb.herokuapp.com/api/contato",
                {
                  email: emailData,
                  description: descriptionData,
                }
              )
                .then((response) => {
                  console.log(response);
                  setIsEmailSent(true);
                  setpostController(false);
                })

                .catch((err) => {
                  console.log(err);
                  setpostController(false);
                });
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                marginBottom: "15px",
                backgroundSize: "contain",
              }}
            >
              <img
                src={imageContact}
                alt="imageContact"
                style={{ width: "80%", marginTop: "15px" }}
              ></img>
            </Box>

            <div style={{ lineHeight: "1.5" }}>
              Para mais informações sobre o Projeto ou para sugerir melhorias no
              site, entre em contato conosco através do email
              juntosifpb@gmail.com ou pelo formulário abaixo:
            </div>
            <EmailContactField emailData={getEmailData} />
            <DescriptionContactField descriptionData={getDescriptionData} />
            <div className={classes.buttonWrapper}>
              <LoadingButton
                loading={postController}
                type="submit"
                /* disabled={disabledButtonController} */
              >
                Enviar
              </LoadingButton>
            </div>
          </form>
        )}
      </Box>
    </Layout>
  );
};

export default Contact;
