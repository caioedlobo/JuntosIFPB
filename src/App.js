import { Button, TextField } from "@material-ui/core";
import "./App.css";
import ButtonGroupLogin from "./components/UI/ButtonGroupLogin";
import Description from "./components/UI/Description";
import LogoImg from "./components/UI/LogoImg";
import { Grid } from "@material-ui/core";
import image from "./assets/undraw_team_collaboration_re_ow29-1.svg";
import imageLogin from "./assets/undraw_sign_in_re_o58h.svg";
function App() {
  return (
    <div>
      <header></header>
      <main>
        <Grid container style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={6}>
            {/* <Description /> */}
            <img
              src={image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="logoImg"
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            style={{ padding: 10 }}
            direction="column"
            justifyContent="space-between"
          >
            <div />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                minWidth: 300,
              }}
            >
              <Grid container justify="center">
                <img src={imageLogin} width={200}></img>
              </Grid>
              <TextField
                label="Usuário"
                margin="normal"
                color="secondary"
              ></TextField>
              <TextField label="Senha" margin="normal"></TextField>
              <div style={{ height: 20 }} />
              <ButtonGroupLogin>Entrar</ButtonGroupLogin>
              <div style={{ height: 20 }} />
              <Button>Não possui conta? Registre-se</Button>
            </div>
            <div />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
