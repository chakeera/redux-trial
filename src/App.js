import { ThemeProvider } from "@material-ui/styles";
import Router from "./router"


function App() {
  return (
    <ThemeProvider>
    <Router/>
    </ThemeProvider>
  );
}

export default App;
