import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Carousel = (props) => {
  const useStyles = makeStyles(theme => ({
    reviewCarousel: {

    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.reviewCarousel}>

    </div>
  )
}

export default Carousel;