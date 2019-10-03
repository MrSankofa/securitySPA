import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Package from './Package.jsx'

const Cards = (props) => {
  const useStyles = makeStyles(theme => ({
    cardSection: {

    },
    packageButtons: {
      backgroundColor: '#fefefe',
      width: '28%',
      margin: '3% auto'
    },
    packageFeaturesUL: {

    },
    cardWrapper: {
      margin: '0 auto 6%',
      width: '62%'
    }

  }));
  const classes = useStyles();
  return (
    <div className={classes.cardSection}>
      <h1>Find the right package for <span>your <br></br>home.</span> </h1>

      <div className={classes.packageButtons}>
        <button>4 CAMERA</button>
        <button>6 CAMERA</button>
        <button>8 CAMERA</button>
      </div>
      <div className={classes.cardWrapper}>
        <Package />
        <Package />
        <Package />
      </div>


    </div>
  )
}

export default Cards;