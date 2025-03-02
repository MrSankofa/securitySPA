
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeatureItem from './FeatureItem.jsx';
import Grid from '@material-ui/core/Grid';


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
        height: '34px'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        borderColor: 'darkslategrey',
        width: '100px',
        height: '34px',
        
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
        margin: '0 auto',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '212px',
        marginLeft: '6%'
      },

    },
    packageImg: {
      width: '89%'
    },
    contactUsLink: {
      margin: 0,
      padding: 0,
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();

  const getPackage = (e) => {
    console.log('package type: ', packageType)
    const message = `I would like to learn more about the ${name} package. Please send me a quote.`

    // sendToContactForm(message);
    if( document.getElementById('message') !== null) {
      console.log('document.getElementById(\'message\')',document.getElementById('message'));
      document.getElementById('message').value = `Hi,

${message} 

please contact me at my email or phone number above. 

Thank you!
      `
    }

  }

  return (
    <Grid item sm={6} md={4} >
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
        <a href="#ContactUs">
          <button className={classes.purchase} onClick={getPackage}>purchase</button>
        </a>
          <a href="#ContactUs" className={classes.contactUsLink}> <button className={classes.learnMore}>learn more</button></a>
          
        </div>
      </div>
    </Grid >
  )
}

export default Package;

