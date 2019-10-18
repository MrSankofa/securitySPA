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
        width: '50%',
        padding: '5% 4% 0% 2%'
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
        padding: '2% 0% 1% 3%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        marginTop: '9%',
        marginLeft: '4%',
        width: '50%',
        padding: '0% 7%'
      },

    },
    contentImgLeft: {
      [theme.breakpoints.down('md')]: {
        width: '100px',
        height: '100px',
        float: 'right',
        marginTop: '2%',
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
        fontSize: '18px',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        color: '#3390e9',
        fontWeight: 'bold',
        fontSize: '25px'
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
        fontSize: '102%',
        padding: '0%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '144%',
        lineHeight: '135%'
      },

    },
  }));

  const classes = useStyles();
  return (
    <div >
      <section className={classes.section1} id="AboutUs">
        <div className={classes.sectionWrapper}>

          <div className={classes.contentLeft}>

            <div className={classes.featureSectionText}>About Us </div>
            <p className={classes.featureSectionP}>My name is Jonathan Bendt. I am a co-owner and founder of J&J Security Brothers with my partner Jose Gonzalez. <br></br> <br></br> Our goal is to provide our customers with the best quality of work and products. </p>
          </div>
          <div className={classes.contentImgRight} id="beachHouse"></div>
        </div>
      </section>
      <section className={classes.section2}>
        <div className={classes.sectionWrapper}>
          <div className={classes.contentImgLeft} id="sofa"></div>
          <div className={classes.contentRight}>
            <div className={classes.featureSectionText}>About Us </div>
            <p className={classes.featureSectionP}>I have experienced first hand the effects of being burglarized and know how it feels to be violated in that way.<br></br><br></br> Our number one goal is to provide our customers with the best in security products and installations. </p>
          </div>
        </div>
      </section>
      <section className={classes.section3}>
        <div className={classes.sectionWrapper}>

          <div className={classes.contentLeft}>

            <div className={classes.featureSectionText}>About Us</div>
            <p className={classes.featureSectionP}>Hello, my name is Jose Gonzalez, I am a Co-Owner and Founder of J&J Security Brothers with my partner Jonathon. <br></br><br></br>We are family owned and operated and understand the need to protect what matters most to you and your family. <br></br><br></br>Every customer, whether you’re new or existing, our goal is to make sure you have the utmost satisfaction with the job we have performed. <br></br><br></br>No job is to small or to big, we are here to ensure you are treated like our family. I look forward to meeting with you to create a security system that directly and effectively matches your needs.</p>
          </div>

          <div className={classes.contentImgRight} id="niceHouse"></div>

        </div>
      </section>
    </div>
  )
}

export default Sections;