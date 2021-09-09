import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff9f4',
      light:'#ffffff',
      dark:'#ccc6c1',
      text:'#ffb0af'

    },
    secondary: {
      main: '#d08080',
      light:'#ffb0af',
      dark:'#9d5254',
      text:'#000000'

    },
  },
});
// https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=fff9f4&secondary.color=D08080&primary.text.color=ffb0af&secondary.text.color=000000
export default theme;