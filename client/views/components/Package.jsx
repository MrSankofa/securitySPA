
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeatureItem from './FeatureItem.jsx';
import Grid from '@material-ui/core/Grid';
import { minHeight } from '@material-ui/system';


const Package = ({ packageType }) => {

  const { name, description, imageUrl, features, packageCategory } = packageType;


  const useStyles = makeStyles(theme => ({
    package: {
      [theme.breakpoints.down('md')]: {

        backgroundColor: '#fefefe',
        margin: '3% auto',
        height: '600px'
      },
      [theme.breakpoints.between('md', 'xl')]: {

        backgroundColor: '#fefefe',
        display: 'inline-block',

        paddingBottom: '4%',

      },


    },
    purchase: {
      [theme.breakpoints.down('md')]: {
        width: '100px',
        height: '34px',
        backgroundColor: 'darkslategray',
        color: 'white'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '100px',
        height: '34px',
        backgroundColor: 'darkslategray',
        color: 'white'
      },

    },
    learnMore: {
      [theme.breakpoints.down('md')]: {
        borderColor: 'darkslategrey',
        width: '100px',
        height: '34px',
        marginLeft: '10px'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        borderColor: 'darkslategrey',
        width: '100px',
        height: '34px',
        marginLeft: '10px'
      },

    },
    packageTitle: {
      [theme.breakpoints.down('md')]: {
        padding: '0 8%'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        textAlign: 'center'
      },

    },
    packageText: {
      [theme.breakpoints.down('md')]: {
        padding: '0 8%'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        textAlign: 'center',
        color: '#9d9ea6',
        lineHeight: '130%'
      },

    },
    packageFeaturesLi: {
      [theme.breakpoints.down('md')]: {
        padding: '3%',
        fontSize: '15px',
        color: 'darkslategrey',
        fontWeight: 'bold',
        lineHeight: '150%'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        padding: '3%',
        fontSize: '15px',
        color: 'darkslategrey',
        fontWeight: 'bold',
        lineHeight: '150%',
      },

    },
    buttonWrapper: {
      [theme.breakpoints.down('md')]: {
        margin: '0 5% 3% 13%',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '212px',
        marginLeft: '6%'
      },

    },
    packageImg: {
      width: '89%'
    }
  }));

  const classes = useStyles();

  return (
    <Grid item md={4} >
      <div className={classes.package}>
        <img src={`${imageUrl}`} className={classes.packageImg} />

        <h3 className={classes.packageTitle}>{name}</h3>

        <p className={classes.packageText}>{description}</p>

        <ul className={classes.packageFeaturesUL}>
          {
            features.length > 0 ?
              features.map((item, i) => {
                return (
                  <FeatureItem feature={item} key={i} />
                )
              })
              :
              <div>awesome product</div>
          }
        </ul>
        <div className={classes.buttonWrapper}>
          <button className={classes.purchase}>purchase</button>
          <button className={classes.learnMore}>learn more</button>
        </div>
      </div>
    </Grid >
  )
}

export default Package;

