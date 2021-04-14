import { createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    Taskboard: {
        display:"fiex",
        alignItem: "center"
    }, 
    shape:{
        padding:20,
        margin:10,
        // color: "white",
        // backgroundColor:"#cccccc",
        boderRadius: 4,
        backgroundColor:theme.color.primary,
        color: theme.shape.textColor,
    }
});

export default styles;