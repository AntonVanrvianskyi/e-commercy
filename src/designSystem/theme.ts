import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    green: { main: "" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: "0px",
          height: "calc(var(--vh, 1vh) * 100)",
        },
      },
    },
  },
});
