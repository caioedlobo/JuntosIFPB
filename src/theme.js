import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
  },
  components: {
    MuiLink: { defaultProps: { underline: "none" } },
    MuiButton: {
      defaultProps: {
        sx: {
          border: 0,
          borderRadius: "15px",
          color: "white",
          width: "100%",
          background: "linear-gradient(to bottom right, #2f6933, #28b00a)",
        },
      },
    },
  },
});
