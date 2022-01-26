import { Button, TextField } from "@material-ui/core";
import ButtonGroupLogin from "./components/UI/ButtonGroupLogin";
import Description from "./components/UI/Description";
import LogoImg from "./components/UI/LogoImg";
import { Grid, Box } from "@material-ui/core";
import image from "./assets/undraw_team_collaboration_re_ow29-1.svg";
import imageLogin from "./assets/undraw_sign_in_re_o58h.svg";
import classes from "./App.module.css";
import LoginText from "./components/UI/LoginText";
import PasswordText from "./components/UI/PasswordText";
//Home,
function App() {
  return (
    <div>
      <header></header>
      <main>
        <Box sx={{ display: "flex" }}>
          <div className={classes.left}>
            <Description />
            <img
              src={image}
              style={{
                //width: "60%",
                width: "768px",
              }}
              alt="logoImg"
            />
          </div>

          <div
            style={{
              width: "30vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "400px",
                minWidth: "300px",
              }}
            >
              <div>
                <img src={imageLogin} width={"200px"}></img>
              </div>
              <LoginText />
              <PasswordText />

              <div style={{ height: 20 }} />

              <ButtonGroupLogin>Entrar</ButtonGroupLogin>

              <div style={{ height: 20 }} />

              <Button>Não possui conta? Registre-se</Button>
            </div>
          </div>
        </Box>
      </main>
    </div>
  );
}

export default App;
