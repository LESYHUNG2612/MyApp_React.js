import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color:{
        primary:"#032F2F",
        secondary:"#00BCD4",
        error: "#E64A19"
    },
    typography:{
        fontFamily: "Roboto"
    },
    shape: {
        backgroundColor: "#701FA2",
        textColor:"#FFFFFF",
        border: "#CCCCCC"
    }
});

export default theme;