import { Button, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import React, { useState } from "react";
import ImageLogin from "../atoms/ImageLogin";
import HeightFormHandler from "../atoms/HeightFormHandler";
import InputMask from "react-input-mask";
import Axios from "axios";
import { LoadingButton } from "@mui/lab";

const CpfForm = (props) => {
  const [isOutsourced, setIsOutsourced] = useState(false);
  const [error, setError] = useState(false);
  const [postController, setPostController] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const valueChangeHandler = (event) => {
    if ("Terceirizado" === event.target.value) {
      return setIsOutsourced(true);
    }
    return setIsOutsourced(false);
  };

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

        /* if (isOutsourced) { */
        Axios.post("https://backendjuntosifpb.herokuapp.com/validateCpf", {
          cpf: cpfValue,
          isOutsourced: isOutsourced,
        })
          .then(() => {
            isOutsourced
              ? localStorage.setItem("cpfValue", cpfValue)
              : localStorage.setItem("cpfValue", "");
            setPostController(false);
            props.CpfHandler();
          })
          .catch((err) => {
            //Mensagem de erro
            setError(true);
            setHelperText(err.response.data.error);
            setPostController(false);
          });
        /* } */
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
                required
                error={error}
                helperText={helperText}
                color={numbers.includes(cpfValue[13]) ? "success" : null}
              />
            )}
          </InputMask>
        </div>
      ) : (
        <div style={{ marginBottom: "36px" }}>
          <HeightFormHandler />
        </div>
      )}

      <HeightFormHandler />

      <HeightFormHandler />

      <LoadingButton type="submit" loading={postController}>
        Continuar
      </LoadingButton>
      <HeightFormHandler />
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
