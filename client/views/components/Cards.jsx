import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Package from './Package.jsx'
import injectSheet from 'react-jss'

const styles = {
  cardSection: {
    '& h1': {
      textAlign: 'center',
      lineHeight: '155%',
      marginBottom: '7%',
      '& span': {
        color: '#3498db'
      }
    }
  },
  packageButtons: {
    backgroundColor: '#fefefe',
    width: '28%',
    margin: '3% auto',
    '& button': {
      margin: '1%',
      width: '30%',
      padding: '2%',
      backgroundColor: '#fefefe',
      border: 'none'
    }
  },
  packageFeaturesUL: {

  },
  cardWrapper: {
    margin: '0 auto 6%',
    width: '66%'
  },
  packageWrapper: {

  }


}



const cards = ({ classes }) => {

  return (
    <div className={classes.cardSection}>
      <h1>Find the right package for <span>your <br></br>home.</span> </h1>

      <div className={classes.packageButtons}>
        <button>4 CAMERA</button>
        <button>6 CAMERA</button>
        <button>8 CAMERA</button>
      </div>
      <div className={classes.cardWrapper}>
        <div className={classes.packageWrapper}>
          <Package />
          <Package />
          <Package />

        </div>
      </div>


    </div>
  )
}

const Cards = injectSheet(styles)(cards)
export default Cards;