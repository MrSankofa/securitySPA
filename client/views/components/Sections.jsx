import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Sections = (props) => {
  const useStyles = makeStyles(theme => ({
    sectionWrapper: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        display: 'flex',
        height: '100%'
      },

    },
    section1: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        height: '610px',
        backgroundColor: '#fefefe'
      },

    },
    section2: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        height: '610px',
        backgroundColor: '#fafafc'
      },

    },
    section3: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        height: '660px',
        backgroundColor: '#fefefe'
      },

    },
    contentLeft: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        marginTop: '18%',
        marginLeft: '10%',
        width: '50%',
        padding: '0% 7%'
      },

    },
    contentImgRight: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '44%',
        background: 'no-repeat center/176%',
        marginTop: '8%',
        borderRadius: '26% 0% 0% 5%',
        height: '82%',
        padding: '0% 3% 0% 0%'
      },

    },
    contentRight: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        marginTop: '18%',
        marginLeft: '10%',
        width: '50%',
        padding: '0% 7%'
      },

    },
    contentImgLeft: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '53%',
        height: '82%',
        padding: '0% 3% 0% 0%',
        background: 'no-repeat center/102%',
        marginTop: '8%',
        borderRadius: '0% 21% 5% 0%'
      },

    },
    whiteBkg: {
      backgroundColor: '#fefefe'
    },
    featureSectionText: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        color: '#3390e9',
        fontWeight: 'bold',
        fontSize: '18px'
      },

    },
    featureSectionH1: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        color: '#464647',
        lineHeight: '174%'
      },

    },
    featureSectionP: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '144%',
        color: '#cacacf',
        lineHeight: '135%'
      },

    },
  }));

  const classes = useStyles();
  return (
    <div >
      <div className={classes.section1}>
        <div className={classes.sectionWrapper}>

          <div className={classes.contentLeft}>

            <div className={classes.featureSectionText}>Featured Section - 1 </div>
            <h1 className={classes.featureSectionH1}>Some details about your service <br></br> times and reviews. </h1>
            <p className={classes.featureSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua </p>
          </div>
          <div className={classes.contentImgRight} id="beachHouse"></div>
        </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.sectionWrapper}>
          <div className={classes.contentImgLeft} id="sofa"></div>
          <div className={classes.contentRight}>
            <div className={classes.featureSectionText}>Featured Section - 2 </div>
            <h1 className={classes.featureSectionH1}>Some details about your service times and reviews. </h1>
            <p className={classes.featureSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
          </div>
        </div>
      </div>
      <div className={classes.section3}>
        <div className={classes.sectionWrapper}>

          <div className={classes.contentLeft}>

            <div className={classes.featureSectionText}>Featured Section - 3 </div>
            <h1 className={classes.featureSectionH1}>Some details about your service times and reviews. </h1>
            <p className={classes.featureSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
          </div>

          <div className={classes.contentImgRight} id="niceHouse"></div>

        </div>
      </div>
    </div>
  )
}

export default Sections;