
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Package = props => {
  const useStyles = makeStyles(theme => ({
    package: {
      [theme.breakpoints.down('sm')]: {
        width: '275px',
        backgroundColor: '#fefefe',
        margin: '3% auto',
        height: '600px'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '275px',
        backgroundColor: '#fefefe',
        display: 'inline-block',
        margin: '0 10px',
        paddingBottom: '4%',
        height: '600px'
      },


    },
    purchase: {
      [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '34px',
        backgroundColor: 'darkslategray',
        color: 'white'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '100px',
        height: '34px',
        backgroundColor: 'darkslategray',
        color: 'white'
      },

    },
    learnMore: {
      [theme.breakpoints.down('sm')]: {
        borderColor: 'darkslategrey',
        width: '100px',
        height: '34px',
        marginLeft: '10px'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        borderColor: 'darkslategrey',
        width: '100px',
        height: '34px',
        marginLeft: '10px'
      },

    },
    packageTitle: {
      [theme.breakpoints.down('sm')]: {
        padding: '0 8%'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        textAlign: 'center'
      },

    },
    packageText: {
      [theme.breakpoints.down('sm')]: {
        padding: '0 8%'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        textAlign: 'center',
        color: '#9d9ea6',
        lineHeight: '130%'
      },

    },
    packageFeaturesLi: {
      [theme.breakpoints.down('sm')]: {
        padding: '3%',
        fontSize: '15px',
        color: 'darkslategrey',
        fontWeight: 'bold',
        lineHeight: '150%'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        padding: '3%',
        fontSize: '15px',
        color: 'darkslategrey',
        fontWeight: 'bold',
        lineHeight: '150%'
      },

    },
    buttonWrapper: {
      [theme.breakpoints.down('sm')]: {
        margin: '0 5% 3% 13%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '212px',
        margin: '45px auto 0'
      },

    },
    packageImg: {
      width: '96%',
      padding: '2%'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.package}>
      <img src="./img/sourceImages/4CameraPackage.jpg" className={classes.packageImg} />

      <h3 className={classes.packageTitle}>4 Camera 2 MP</h3>

      <p className={classes.packageText}>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>

      <ul className={classes.packageFeaturesUL}>
        <li className={classes.packageFeaturesLi}>2.0 MP IP turret security cameras, white</li>
        <li className={classes.packageFeaturesLi}>2.m mm lens; 108 FOV</li>
        <li className={classes.packageFeaturesLi}>Records up to 1080p HD video @30fps</li>
      </ul>
      <div className={classes.buttonWrapper}>
        <button className={classes.purchase}>purchase</button>
        <button className={classes.learnMore}>learn more</button>
      </div>
    </div>
  )
}

export default Package;