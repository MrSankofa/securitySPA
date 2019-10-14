import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Sections = () => {
  const useStyles = makeStyles(theme => ({
    sectionWrapper: {
      [theme.breakpoints.down('md')]: {
        height: '100%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        display: 'flex',
        height: '100%'
      },

    },
    section1: {
      [theme.breakpoints.down('md')]: {
        height: '100%',
        backgroundColor: '#fefefe'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        height: '610px',
        backgroundColor: '#fefefe'
      },

    },
    section2: {
      [theme.breakpoints.down('md')]: {
        height: '100%',
        backgroundColor: '#fafafc'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        height: '610px',
        backgroundColor: '#fafafc'
      },

    },
    section3: {
      [theme.breakpoints.down('md')]: {
        eight: '100%',
        backgroundColor: '#fefefe'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        height: '660px',
        backgroundColor: '#fefefe'
      },

    },
    contentLeft: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        paddingLeft: '3%',
        paddingTop: '2%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        marginTop: '18%',
        marginLeft: '10%',
        width: '50%',
        padding: '0% 7%'
      },

    },
    contentImgRight: {
      [theme.breakpoints.down('md')]: {
        width: '44%',
        background: 'no-repeat center/176%',
        borderRadius: '26% 26% 0% 5%',
        height: '17vh',
        padding: '14% 3% 4% 0%',
        margin: '0% auto'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        width: '44%',
        background: 'no-repeat center/176%',
        marginTop: '8%',
        borderRadius: '26% 0% 0% 5%',
        height: '82%',
        padding: '0% 3% 0% 0%'
      },

    },
    contentRight: {
      [theme.breakpoints.down('md')]: {
        padding: '0% 5%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        marginTop: '18%',
        marginLeft: '10%',
        width: '50%',
        padding: '0% 7%'
      },

    },
    contentImgLeft: {
      [theme.breakpoints.down('md')]: {
        width: '100px',
        height: '100px',
        float: 'right',
        marginTop: '29%',
        background: 'no-repeat center/102%',
        borderRadius: '0% 21% 5% 0%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
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
      [theme.breakpoints.down('md')]: {
        color: '#3390e9',
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '8% 0',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        color: '#3390e9',
        fontWeight: 'bold',
        fontSize: '18px'
      },

    },
    featureSectionH1: {
      [theme.breakpoints.down('md')]: {
        color: '#464647',
        lineHeight: '125%',
        fontSize: '175%',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        color: '#464647',
        lineHeight: '174%'
      },

    },
    featureSectionP: {
      [theme.breakpoints.down('md')]: {
        fontSize: '144%',
        color: '#cacacf',
        padding: '5%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '144%',
        color: '#cacacf',
        lineHeight: '135%'
      },

    },
  }));

  const classes = useStyles();
  return (
    <div >
      <section className={classes.section1}>
        <div className={classes.sectionWrapper}>

          <div className={classes.contentLeft}>

            <div className={classes.featureSectionText}>Featured Section - 1 </div>
            <h1 className={classes.featureSectionH1}>Some details about your service <br></br> times and reviews. </h1>
            <p className={classes.featureSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua </p>
          </div>
          <div className={classes.contentImgRight} id="beachHouse"></div>
        </div>
      </section>
      <section className={classes.section2}>
        <div className={classes.sectionWrapper}>
          <div className={classes.contentImgLeft} id="sofa"></div>
          <div className={classes.contentRight}>
            <div className={classes.featureSectionText}>Featured Section - 2 </div>
            <h1 className={classes.featureSectionH1}>Some details about your service times and reviews. </h1>
            <p className={classes.featureSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
          </div>
        </div>
      </section>
      <section className={classes.section3}>
        <div className={classes.sectionWrapper}>

          <div className={classes.contentLeft}>

            <div className={classes.featureSectionText}>Featured Section - 3 </div>
            <h1 className={classes.featureSectionH1}>Some details about your service <br></br> times and reviews. </h1>
            <p className={classes.featureSectionP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
          </div>

          <div className={classes.contentImgRight} id="niceHouse"></div>

        </div>
      </section>
    </div>
  )
}

export default Sections;