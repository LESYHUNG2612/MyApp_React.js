import React, { Component } from 'react';
import  styles from "./styles.js";
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from './../Taskboard/index';
import theme from "./../../commonts/Theme";

class App extends Component {
  render() {
    const {classes}=this.props;
    return (
        <ThemeProvider theme={theme}>
            <Taskboard/>
        </ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);

