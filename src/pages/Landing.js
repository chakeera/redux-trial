import { Box, AppBar} from "@material-ui/core"
import logo from "../assets/CGlogo.png"
import { useTheme } from '@material-ui/core/styles';


const Landing = () =>{
    const theme = useTheme();
    return (
        <Box>
            <AppBar>
            <img src={logo} alt="logo" width={300} height={72}/>
            </AppBar>
        </Box>
    );
}

export default Landing;