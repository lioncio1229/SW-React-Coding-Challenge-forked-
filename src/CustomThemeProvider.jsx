import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#5bdfd3",
      main: "#0bada2",
      dark: "#007d73"
    },
    background: {
      default: "#d7d8df"
    },
    action : {
      disabled : grey['300']
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
