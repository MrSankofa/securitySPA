import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    contactForm: {

    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.contactForm}>

    </div>
  )
}

export default Contact;