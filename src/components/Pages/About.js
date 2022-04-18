import React from "react";
import Layout from "../template/Layout";
import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/About.module.css";
import image from "../../assets/undraw_proud_coder_re_exuy.svg";
import Partners from "./Partners";
import classesForm from "./stylesheet/Partners.module.css";
import imagePartners from "../../assets/undraw_winners_re_wr1l.svg";
import imagePartners2 from "../../assets/undraw_collaborating_re_l43g.svg";
const About = () => {
  return (
    <Layout>
      <div
        data-testid="about"
        className={`${classesCommon.form} ${classesForm.formPartners}`}
      >
        <p
          style={{
            fontSize: "36px",
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          Bem-vindo ao Juntos pelo IFPB
        </p>
        <img src={image} alt="AboutUsImg" className={classes.imgLogo}></img>

        <p className={classes.text}>
          O Projeto tem como objetivo facilitar a transmissão de problemas e
          melhorias para o IFPB. O Projeto tem parceira com o GCOMPI, o IFPB
          Campus Campina Grande e a UFERSA Campus Pau dos Ferros.
        </p>

        <div
          style={{
            flexDirection: "column",
            textAlign: "center",
            /* background: "black", */
          }}
        >
          <img
            src={imagePartners}
            alt="PartnersImg"
            className={classes.imgLogo}
          />
          <img
            src={imagePartners2}
            alt="Partners2Img"
            className={classes.imgLogo}
          />
        </div>
        <p
          style={{
            fontSize: "36px",
            paddingTop: "80px",
            paddingBottom: "30px",
          }}
        >
          Nossos Parceiros
        </p>
        <Partners />
      </div>
    </Layout>
  );
};

export default About;
