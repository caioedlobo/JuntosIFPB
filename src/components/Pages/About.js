import React from "react";
import Layout from "../template/Layout";
import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/About.module.css";
import image from "../../assets/undraw_proud_coder_re_exuy.svg";
import Partners from "./Partners";
import classesForm from "./stylesheet/Partners.module.css";
const About = () => {
  return (
    <Layout>
      <div
        data-testid="about"
        className={`${classesCommon.form} ${classesForm.formPartners}`}
      >
        <img src={image} alt="AboutUsImg" className={classes.imgLogo}></img>
        {/* <img
          src={
            "https://www.ifpb.edu.br/materias/ifpb-seleciona-professor-substituto-para-campus-campina-grande/ifpb-campina-grande.jpg/@@images/aebfe6b2-6e50-47b1-9269-5a7232d4c195.jpeg"
          }
          alt="ifCampus"
          width={"300px"}
          style={{ marginTop: "30px" }}
        ></img> */}
        <p className={classes.text} style={{ paddingBottom: "40px" }}>
          O Projeto tem como objetivo facilitar a transmissão de problemas e
          melhorias para o IFPB. O Projeto tem parceira com o GCOMPI, o IFPB
          Campus Campina Grande e a UFERSA.
        </p>
        <Partners />
      </div>
    </Layout>
  );
};

export default About;
