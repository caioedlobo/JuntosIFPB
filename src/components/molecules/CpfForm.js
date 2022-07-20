import { Button, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React, { useEffect, useState } from "react";
import ImageLogin from "../atoms/ImageLogin";
import HeightFormHandler from "../atoms/HeightFormHandler";
import InputMask from "react-input-mask";
import Axios from "axios";
import { LoadingButton } from "@mui/lab";


const CpfForm = (props) => {

  const [emailTec, setEmailTec] = useState("");
  const [isOutsourced, setIsOutsourced] = useState(false);
  const [isTec, setIsTec] = useState(false);
  const [isDoc, setIsDoc] = useState(false);
  const [error, setError] = useState(false);
  const [postController, setPostController] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const validEmail = (email) => {
    if (email.split("@").length === 2) {
      if (email.split("@")[1] === "academico.ifpb.edu.br" || email.split("@")[1] === "ifpb.edu.br") {
        return true;
      }
    }
  }

  const valueChangeHandler = (event) => {
    if ("Terceirizado" === event.target.value) {
      setIsTec(false);
      return setIsOutsourced(true);
    }
    else if ("Tec" === event.target.value) {
      setIsOutsourced(false);
      return setIsTec(true);
    }
    else if ("Docente/Discente" === event.target.value) {
      setIsOutsourced(false)
      setIsTec(false);
      return setIsDoc(true);
    }

    return setIsOutsourced(false);
  };

  useEffect(() => {
    if (emailTec.length === 0) {
      setError(false);
      setHelperText("");
    }
  }, [emailTec]);

  return (
    <form
      data-testid="cpf-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        /* justifyContent: "center", */
        width: "300px",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        setPostController(true);

        if (isOutsourced || isDoc) {

          Axios.post("https://backendjuntosifpb.herokuapp.com/validateCpf", {
            cpf: cpfValue,
            isOutsourced: isOutsourced,
          })
            .then(() => {
              localStorage.setItem("emailTec", emailTec);
              isOutsourced
                ? localStorage.setItem("cpfValue", cpfValue)
                : localStorage.setItem("cpfValue", "");
              setPostController(false);
              props.CpfHandler();
            })
            .catch((err) => {

              setError(true);
              setHelperText(err.response.data.error);
              setPostController(false);
            });
        }
        else if (isTec) {
          if (validEmail(emailTec)) {
            localStorage.setItem("emailTec", emailTec);
            localStorage.setItem("cpfValue", "");
            setPostController(false);
            props.CpfHandler();
          }
          else {
            setPostController(false);
            setError(true);
            setHelperText("Email inválido");
          }
          /* Axios.post("https://backendjuntosifpb.herokuapp.com/", {
            email: emailTec,
            isOutsourced: true,
          })
            .then(() => {
              localStorage.setItem("emailTec", emailTec);
              setPostController(false);
              props.CpfHandler();
            })
            .catch((err) => { }) */

        }
      }}
    >
      <ImageLogin />
      <HeightFormHandler />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Selecione sua categoria:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Docente/Discente"
          name="radio-buttons-group"
          onChange={valueChangeHandler}
        >
          <FormControlLabel
            value="Docente/Discente"
            control={<Radio />}
            label="Docente/Discente"
          />
          <FormControlLabel
            value="Terceirizado"
            control={<Radio />}
            label="Terceirizado"
          />
          <FormControlLabel
            value="Tec"
            control={<Radio />}
            label="Téc Administrativo"
          />
        </RadioGroup>
      </FormControl>
      <HeightFormHandler />
      {isOutsourced ? (
        <div style={{ width: "150px" }}>
          <InputMask
            mask="999.999.999-99"
            value={cpfValue}
            /* maskChar=" " */
            alwaysShowMask={true}
            disabled={false}
            onChange={(e) => {
              setCpfValue(e.target.value);
              setError(false);
              setHelperText("");
            }}
          >
            {() => (
              <TextField
                variant="outlined"
                label="Digite seu CPF"
                required={true}
                error={error}
                helperText={helperText}
                color={numbers.includes(cpfValue[13]) ? "success" : null}
              />
            )}
          </InputMask>
        </div>
      ) : (
        null
      )}

      {isTec ?
        <div>
          <TextField label="Digite seu email"
            required={true}
            error={error}
            helperText={helperText}
            onChange={(event) => setEmailTec(event.target.value)}
          />
        </div>
        : null}

      <HeightFormHandler />
      <HeightFormHandler />
      {!isOutsourced && !isTec ? <HeightFormHandler /> : null}

      <LoadingButton type="submit" loading={postController}>
        Continuar
      </LoadingButton>
      {!isOutsourced && !isTec ? <HeightFormHandler /> : null}
      <Button
        sx={{ backgroundColor: "transparent" }}
        onClick={props.FormHandlerRegister}
      >
        Voltar para o Login
      </Button>
    </form>
  );
};

export default CpfForm;
