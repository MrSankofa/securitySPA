import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.jsx';
import Sections from './Sections.jsx';
import Card from './Cards.jsx';
import ReviewList from './ReviewList.jsx';
import Contact from './Contact.jsx';

const SecuritySPA = ({ reviews, slides, packages, getPackage, defaultPackage, getDataRows }) => {
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
            <Card packages={packages} getPackage={getPackage} defaultPackage={defaultPackage} getDataRows={getDataRows} />
            {
                slides !== 0 ? (<ReviewList reviews={reviews} slides={slides} />) : <div>No Reviews</div>
            }
            <Contact />
        </div>
    );
}

export default SecuritySPA;