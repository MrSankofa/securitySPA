import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NestedGrid from './NestedGrid.jsx'

const Cards = ({ packages, getPackage, defaultPackage, getDataRows }) => {

  const useStyles = makeStyles(theme => ({
    cardSection: {
      [theme.breakpoints.down('md')]: {

      },
      [theme.breakpoints.between('lg', 'xl')]: {
        '& h1': {
          textAlign: 'center',
          lineHeight: '155%',
          marginBottom: '7%',
          '& span': {
            color: '#3498db'
          }
        }
      },

    },
    packageButtons: {
      [theme.breakpoints.down('md')]: {
        width: '79%',
        margin: '3% auto',
        '& button': {
          margin: '1%',
          width: '30%',
          padding: '2%',
          backgroundColor: '#fefefe',
          border: 'none',
          borderStyle: 'outset',
          fontWeight: 'bold'
        }
      },
      [theme.breakpoints.only('lg')]: {
        backgroundColor: '#fefefe',
        width: '28%',
        margin: '3% auto',
        '& button': {
          margin: '1%',
          width: '31%',
          padding: '2%',
          backgroundColor: '#fefefe',
          border: 'none',
          fontWeight: 'bold',
          borderStyle: 'groove'
        }
      },
      [theme.breakpoints.between('lg', 'xl')]: {
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

    },
    packageFeaturesUL: {

    },
    cardWrapper: {
      [theme.breakpoints.down('md')]: {
        margin: '0 auto 6%',
        width: '66%'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        margin: '0 auto 6%',
        width: '66%'
      },

    },
    packageSectionTitle: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center'
      }

    }

  }));

  const classes = useStyles();

  return (
    <div className={classes.cardSection}>
      <h1 className={classes.packageSectionTitle}>Find the right package for <span>your <br></br>home.</span> </h1>

      <div className={classes.packageButtons}>
        <button onClick={() => { getPackage('4') }}>4 CAMERA</button>
        <button onClick={() => { getPackage('6') }}>6 CAMERA</button>
        <button onClick={() => { getPackage('8') }}>8 CAMERA</button>
      </div>

      <div className={classes.cardWrapper}>

        <Grid container spacing={2}>
          <NestedGrid dataRows={getDataRows(packages[defaultPackage])} />
        </Grid>
      </div>
    </div>
  )
}

export default Cards;