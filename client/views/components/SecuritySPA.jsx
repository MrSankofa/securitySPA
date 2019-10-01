import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { lineHeight } from '@material-ui/system';

const SecuritySPA = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height: '75vh',
        },
        header: {
            height: '620px',
            backgroundImage: 'url(./img/sourceImages/brettNeighborhood.jpg)',
            backgroundRepeat: 'round',
            width: '100%',
            borderRadius: '0 0 0 134px',
            backgroundSize: 'cover'
        },
        mainNav: {
            zIndex: '3',
            color: 'white',
            textAlign: 'right',
            marginRight: '10%'
        },
        mainNavWrapper: {
            paddingTop: '2%'
        },
        current: {
            backgroundColor: '#3498db'
        },
        headerContent: {
            zIndex: '2',
            marginLeft: '10%'
        },
        mainTitle: {
            color: 'white',
            lineHeight: '160%',
            marginTop: '10%'
        },
        mainDescription: {
            color: '#b6bab9',
            lineHeight: '180%',
            marginTop: '3%',
            fontSize: '17px'
        },
        buttonWrapper: {
            marginTop: '55px'
        },
        contactUs: {
            backgroundColor: '#3498db',
            color: 'white',
            padding: '15px 65px',
            border: 'none',
            marginRight: '2%',
            fontSize: '15px'
        },
        learnMore: {
            backgroundColor: 'white',
            color: 'black',
            padding: '15px 65px',
            border: 'none',
            fontSize: '15px'
        },
        sectionWrapper: {
            display: 'flex',
            height: '100%'
        },
        section1: {
            height: '730px',
            backgroundColor: '#fefefe'
        },
        section2: {
            height: '730px',
            backgroundColor: '#fafafc'
        },
        section3: {
            height: '730px',
            backgroundColor: '#fefefe'
        },
        contentLeft: {
            marginTop: '18%',
            marginLeft: '10%',
            width: '50%',
            padding: '0% 7%'
        },
        contentImgRight: {
            width: '44%',
            background: 'no-repeat center/176%',
            marginTop: '8%',
            borderRadius: '26% 0% 0% 5%',
            height: '82%',
            padding: '0% 3% 0% 0%'
        },
        contentRight: {
            marginTop: '18%',
            marginLeft: '10%',
            width: '50%',
            padding: '0% 7%'
        },
        contentImgLeft: {
            width: '53%',
            height: '82%',
            padding: '0% 3% 0% 0%',
            background: 'no-repeat center/102%',
            marginTop: '8%',
            borderRadius: '0% 21% 5% 0%'
        },
        whiteBkg: {
            backgroundColor: '#fefefe'
        },
        featureSectionText: {
            color: '#3390e9',
            fontWeight: 'bold',
            fontSize: '18px'
        },
        featureSectionH1: {
            color: '#464647',
            lineHeight: '174%'
        },
        featureSectionP: {
            fontSize: '144%',
            color: '#cacacf',
            lineHeight: '135%'
        },
        gridImg: {

        },
        grid: {

        },
        cards: {

        },
        reviewCarousel: {

        },
        contactForm: {

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
        },
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.whiteBkg}>
                <div className={classes.header}>
                    <div className={classes.headerContent}>
                        <div className={classes.mainNavWrapper}>

                            <nav className={classes.mainNav}>
                                <ul>
                                    <li><a href="#" >home</a></li>
                                    <li><a href="#">about us</a></li>
                                    <li><a href="#">packages</a></li>
                                    <li><a href="#">reviews</a></li>
                                    <li><a href="#" className={classes.current}>contact us</a></li>
                                </ul>
                            </nav>
                        </div>

                        <h1 className={classes.mainTitle}>Home Security you can <br></br> fully trust.</h1>
                        <p className={classes.mainDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor Lorem ipsum dolor.</p>
                        <div className={classes.buttonWrapper}>
                            <button className={classes.contactUs}> Contact Us</button>
                            <button className={classes.learnMore}> Learn More</button>
                        </div>

                    </div>
                    <div className={classes.gridImg} id="gridImg"></div>
                </div>

            </div>
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
            <div className={classes.grid}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.cards}> </div>
            <div className={classes.reviewCarousel}> </div>
            <div className={classes.contactForm}> </div>
        </div>
    );
}

export default SecuritySPA;