import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {

  const useStyles = makeStyles(theme => ({
    mainNav: {
      [theme.breakpoints.down('sm')]: {
        '& ul': {
          width: '100%',
          overflow: 'hidden',
          background: '#505050',
          height: 0,
          padding: '0%',
          margin: 0,
          listStyleType: 'none',
          transition: 'height 1s ease'
        },
        '& ul.open': {
          height: 'auto',
          transition: 'height 1s ease'
        }
      },
      [theme.breakpoints.between('md', 'xl')]: {
        zIndex: '3',
        color: 'white',
        textAlign: 'right',
        marginRight: '10%',
        '& ul': {
          zIndex: '2',
          textAlign: 'right',
          listStyleType: 'none',
          margin: '0px',
        }
      },

    },
    li: {
      [theme.breakpoints.down('sm')]: {
        borderBottomStyle: 'groove',
        borderBottomColor: 'lightslategrey',
        textAlign: 'center',
        padding: '2%',
        '& a': {
          color: 'white',
          textDecoration: 'none',
          '&:hover': {
            background: '#3498db'
          }
        }
      },
      [theme.breakpoints.between('sm', 'xl')]: {
        display: 'inline-block',
        marginLeft: '3%',
        '& a': {
          color: 'white',
          textDecoration: 'none',
          marginRight: '10px',
          padding: '10px',
          '&:hover': {
            background: '#3498db'
          }
        }
      },

    },
    mainNavWrapper: {
      [theme.breakpoints.down('md')]: {
        background: 'rgba(0, 0, 0, 1)'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        background: 'rgba(0,0,0,1)',
        width: '100%',
        opacity: '1',
        transition: 'width 2s ease',
        padding: '10px',
        position: 'fixed',
        zIndex: 1,
        '&.sticky': {
          position: 'fixed',
          top: '0px',
          opacity: '1',
          transition: 'opacity 2s ease',
          padding: '10px',
          zIndex: 1
        },
        '&.scrolling': {
          opacity: '0',
          position: 'fixed',
          transition: 'opacity 30ms ease'
        }
      },

    },
    current: {
      backgroundColor: '#3498db'
    },
    header: {
      [theme.breakpoints.down('md')]: {
        backgroundImage: 'url(./img/sourceImages/neighborhood.jpg)',
        backgroundRepeat: 'round',
        width: '100%',
        height: '355px'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        height: '670px',
        backgroundImage: 'url(./img/sourceImages/neighborhood.jpg)',
        backgroundRepeat: 'round',
        width: '100%',
        borderRadius: '0 0 0 85px',
        backgroundSize: 'cover'
      },

    },
    headerContent: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: '2%',
        paddingTop: '2%',
        position: 'relative'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        paddingLeft: '10%',
        paddingTop: '5%',
        position: 'relative'
      },

    },
    mainTitle: {
      [theme.breakpoints.down('md')]: {
        color: 'white',
        margin: 0,
      },
      [theme.breakpoints.between('md', 'xl')]: {
        color: 'white',
        lineHeight: '160%',
        marginTop: '10%'
      },

    },
    mainDescription: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.only('md')]: {
        color: '#b6bab9',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        color: '#b6bab9',
        lineHeight: '180%',
        marginTop: '3%',
        fontSize: '17px',
        padding: '0 2% 0 0'
      },

    },
    buttonWrapper: {
      [theme.breakpoints.down('md')]: {
        padding: '4%',
        margin: '6%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        marginTop: '55px'
      },
    },
    contactUs: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderStyle: 'groove',
        width: '100px',
        height: '31px',
        margin: '3%'
      },
      [theme.breakpoints.only('md')]: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '15px 65px',
        border: 'none',
        marginRight: '2%',
        fontSize: '15px'
      },

    },
    learnMore: {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderStyle: 'groove',
        width: '100px',
        height: '31px',
      },
      [theme.breakpoints.only('md')]: {
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 65px',
        border: 'none',
        fontSize: '15px'
      },

    },
    whiteBkg: {
      backgroundColor: '#fefefe'
    },
    overlay: {
      [theme.breakpoints.down('md')]: {
        backgroundColor: 'black',
        position: 'absolute',
        opacity: '0.5',
        width: '100%',
        height: '355px',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        backgroundColor: 'black',
        position: 'absolute',
        opacity: '0.5',
        width: '100%',
        height: '670px',
        borderRadius: '0 0 0 85px',
      },

    },
    gridWhiteBkg: {
      backgroundColor: '#fefefe'
    },
    logo: {
      [theme.breakpoints.down('md')]: {
        width: '59%',
        marginRight: '24%',
        padding: '2%'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        backgroundColor: 'green'
      },
    },
    menu: {
      [theme.breakpoints.down('md')]: {
        padding: '1%',
        background: 'black',
        display: 'flex'
      },
      [theme.breakpoints.between('md', 'xl')]: {
        display: 'none'
      },
    },
    burgerNav: {
      background: 'url(./img/sourceImages/menuIcon.png) round',
      display: 'block',
      height: '40px',
      width: '13%'
    }

  }));

  const classes = useStyles();

  let isScrolling;
  let stopped = [];

  const checkHeader = _.throttle(() => {
    if (document.querySelector('#navWrapper') !== null) {
      stopped[0] = false;

      let scrollPosition = [Math.round(window.scrollY)];


      if (stopped[0] === false) {
        document.querySelector('#navWrapper').classList.add('scrolling');
        document.querySelector('#navWrapper').classList.remove('sticky')
      }


      const runOnce = _.throttle(() => {
        window.clearTimeout(isScrolling);
        stopped[0] = true;

        isScrolling = setTimeout(() => {
          if (stopped[0] === true && scrollPosition[0] > 670) {
            document.querySelector('#navWrapper').classList.add('sticky');
            document.querySelector('#navWrapper').classList.remove('scrolling')
          } else {
            document.querySelector('#navWrapper').classList.remove('scrolling')
            document.querySelector('#navWrapper').classList.remove('sticky')
          }
        }, 4000)

      }, 3000)

      runOnce();
    }
  }, 2000);

  window.addEventListener('scroll', checkHeader);

  let toggle = -1;
  const openMenu = (e) => {
    toggle *= -1;
    toggle === 1 ? document.querySelector('#nav ul').classList.add('open') : document.querySelector('#nav ul').classList.remove('open');
  }

  return (
    <React.Fragment>
      <div className={classes.mainNavWrapper} id={"navWrapper"}>

        <nav className={classes.mainNav} id={"nav"}>
          <div className={classes.menu}>
            <div className={classes.logo}>
              <img src="./img/logoDesign/LargeLogo.png" width="100%" height="100%" />
            </div>
            <a className={classes.burgerNav} onClick={openMenu}></a>
          </div>
          <ul className={classes.ul}>
            <li className={classes.li}><a href="#" >home</a></li>
            <li className={classes.li}><a href="#">about us</a></li>
            <li className={classes.li}><a href="#">packages</a></li>
            <li className={classes.li}><a href="#">reviews</a></li>
            <li className={classes.li}><a href="#" className={classes.current}>contact us</a></li>
          </ul>
        </nav>

      </div>

      <div className={classes.whiteBkg}>

        <div className={classes.header}>
          <div className={classes.overlay}></div>
          <div className={classes.headerContent}>
            <h1 className={classes.mainTitle}>Home Security you can <br></br> fully trust.</h1>
            <p className={classes.mainDescription}>It is our goal to deliver an efficient, effective, and high-quality security solutions while providing the best level of customer service for our clients. We strive to deliver peace of mind to each and every customer using the highest quality equipment and professionalism. We will work hard to provide what is the best option for each customer. From security systems to video surveillance, we have you covered by educating ourselves and using the latest technology and products to protect not only your home but what's most important, you and your loved ones.</p>
            <div className={classes.buttonWrapper}>
              <button className={classes.contactUs}> Contact Us</button>
              <button className={classes.learnMore}> Learn More</button>
            </div>

          </div>

        </div>
        <div className={classes.gridImg} id="gridImg"></div>

      </div>

    </React.Fragment>
  )
}
export default Header;
