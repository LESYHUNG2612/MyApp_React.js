import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Tasklist from "../../components/Tasklist";
import {STATUTES} from "../../constants";
import TaskForm from "../../components/TaskForm";


const listTask =[
    {
        id: 0,
        title: "read book",
        description: "read material-ui book",
        status: 0
    },
    {
        id: 1,
        title: "Play ",  
        description: " book",
        status: 1
    },
    {
        id: 2,
        title: "read ",
        description: "material-ui book",
        status: 2
    },
];

class Taskboard extends Component {
    state={
        open : false,
    }

    renderBoard(){
        const {classes} = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUTES.map((status)=>{
                    const taskFiltered = listTask.filter(task => task.status === status.value);
                    return <Tasklist key={status.value} tasks={taskFiltered} status={status}/>
                })}
            </Grid>
        ); 
        return xhtml;
    } 

    handleClose = () => {
        this.setState({
            open : false
        });
    }
    openForm = ()=>{
        this.setState({
            open : true
        });
    }
    renderForm(){
        const {open}=this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open ={open} onClose={this.handleClose}/>
        ); 
        return xhtml;
    }

    render() {
        const { classes} = this.props;
        return (
            <div className={classes.Taskboard} >
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm }>
                     <AddIcon/>Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

Taskboard.PropTypes = {
    classes:PropTypes.object
}
export default withStyles(styles)(Taskboard);