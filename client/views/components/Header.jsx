import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const Header = (props) => {
  const useStyles = makeStyles(theme => ({
    header: {
      height: '670px',
      backgroundImage: 'url(./img/sourceImages/neighborhood.jpg)',
      backgroundRepeat: 'round',
      width: '100%',
      borderRadius: '0 0 0 85px',
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
      marginLeft: '10%',
      position: 'relative'
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
    whiteBkg: {
      backgroundColor: '#fefefe'
    },
    overlay: {
      backgroundColor: 'black',
      position: 'absolute',
      opacity: '0.5',
      width: '100%',
      height: '670px',
      borderRadius: '0 0 0 85px',
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.whiteBkg}>
      <div className={classes.header}>
        <div className={classes.overlay}></div>
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
  )
}

export default Header;