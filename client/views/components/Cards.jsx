import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Package from './Package.jsx'
import injectSheet from 'react-jss'

// const styles = {
//   cardSection: {
//     '& h1': {
//       textAlign: 'center',
//       lineHeight: '155%',
//       marginBottom: '7%',
//       '& span': {
//         color: '#3498db'
//       }
//     }
//   },
//   packageButtons: {
//     backgroundColor: '#fefefe',
//     width: '28%',
//     margin: '3% auto',
//     '& button': {
//       margin: '1%',
//       width: '30%',
//       padding: '2%',
//       backgroundColor: '#fefefe',
//       border: 'none'
//     }
//   },
//   packageFeaturesUL: {

//   },
//   cardWrapper: {
//     margin: '0 auto 6%',
//     width: '62%'
//   }

// }



const Cards = () => {

  const useStyles = makeStyles(theme => ({
    cardSection: {
      [theme.breakpoints.down('sm')]: {

      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
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
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
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
      [theme.breakpoints.down('sm')]: {

      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        margin: '0 auto 6%',
        width: '62%'
      },

    },
    packageSectionTitle: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }

    }

  }));

  const classes = useStyles();

  return (
    <div className={classes.cardSection}>
      <h1 className={classes.packageSectionTitle}>Find the right package for <span>your <br></br>home.</span> </h1>

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