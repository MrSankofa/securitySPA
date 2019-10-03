import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    contactWrapper: {
      width: '100%',
      height: '680px',
      backgroundImage: 'url(\'./img/sourceImages/contactUs.jpg\')',
      backgroundRepeat: 'round',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.contactWrapper}>

    </div>
  )
}

export default Contact;