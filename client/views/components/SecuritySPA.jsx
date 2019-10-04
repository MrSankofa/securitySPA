import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.jsx';
import Sections from './Sections.jsx';
import GridSPA from './GridSPA.jsx';
import Card from './Cards.jsx';
import Carousel from './Carousel.jsx';
import Contact from './Contact.jsx';



const SecuritySPA = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height: '75vh',
        },

    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Sections />
            <GridSPA />
            <Card />
            <Carousel />
            <Contact />
        </div>
    );
}

export default SecuritySPA;