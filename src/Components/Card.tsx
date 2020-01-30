import React from 'react';
import Modal from '../Components/Modal';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';




const Card = (props:any) => {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(36),
        height: theme.spacing(23),
      },
    },
  }),
);

const classes = useStyles();
    return (
    <div className={classes.root}>
    <Paper elevation={3}>
      <div className="content" style={{textAlign:"center", padding:"40px 0px"}}>
        <h1 style={{fontSize:"20px"}}>{props.BHK}</h1>
        <div style={{padding:"10px 0px 0px 0px", color:"red"}}>
        {props.pricing}
        </div>
        <br/>
         <Modal title="Know More" desc="Waterford Pricing" class="tabelbuttonabcd"/>
      </div>
      </Paper>
      </div>
     
    );
};

export default Card;