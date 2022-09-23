import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#5bdfd3",
      main: "#0bada2",
      dark: "#007d73"
    },
    background: {
      default: "#d7d8df"
    }
  }
});

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
