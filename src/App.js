import { ThemeProvider } from "@material-ui/styles";
import theme from "./core/theme";
import Router from "./router"


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router/>
    </ThemeProvider>
  );
}

export default App;
