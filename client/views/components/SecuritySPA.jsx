import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.jsx';
import Sections from './Sections.jsx';
import GridSPA from './GridSPA.jsx';
import Card from './Cards.jsx';
import ReviewList from './ReviewList.jsx';
import Contact from './Contact.jsx';

// for xs fix everything (320px)
// - header will be changed to a drop down list.
// - background-size contain
// - take off the width or width 100% on the package buttons and add a margin of 4% auto, display block, purchase button: width: 44%, margin 4$, height
// - remove background color on packageButtons class, border buttons
// - reviewCarousel width 100%, whiteSpace pre-wrap
// - change width to 100% on review
// - form: width 100%, height: auto, 
// for s fix the header, border radius on images, grid image sizes, packages (600px)
// for md fix the packages (960px)
// lg and up stays the same

const SecuritySPA = ({ reviews, slides }) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            [theme.breakpoints.only('xs')]: {
                backgroundColor: 'red',
                '& Header': {
                    '& .mainNav': {
                        backgroundColor: 'purple',
                        padding: '10px'
                    }
                }
            },
            [theme.breakpoints.only('sm')]: {
                backgroundColor: 'green',
            },
            [theme.breakpoints.only('md')]: {
                backgroundColor: 'blue',
            },

        },

    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Sections />
            <GridSPA />
            <Card />
            {
                slides !== 0 ? (<ReviewList reviews={reviews} slides={slides} />) : <div></div>
            }
            <Contact />
        </div>
    );
}

export default SecuritySPA;