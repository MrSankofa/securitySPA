import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.jsx';
import Sections from './Sections.jsx';
import GridSPA from './GridSPA.jsx';
import Card from './Cards.jsx';
import ReviewList from './ReviewList.jsx';
import Contact from './Contact.jsx';



const SecuritySPA = ({ reviews, slides }) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%'
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