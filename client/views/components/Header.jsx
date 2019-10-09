import React from 'react';
import _ from 'lodash';
import injectSheet from 'react-jss'

const styles = {
  mainNav: {
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
  li: {
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
  mainNavWrapper: {
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
  current: {
    backgroundColor: '#3498db'
  },
  header: {
    height: '670px',
    backgroundImage: 'url(./img/sourceImages/neighborhood.jpg)',
    backgroundRepeat: 'round',
    width: '100%',
    borderRadius: '0 0 0 85px',
    backgroundSize: 'cover'
  },
  headerContent: {
    paddingLeft: '10%',
    paddingTop: '5%',
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
  },
  gridImg: {
    width: '225px',
    height: '96px',
    background: 'url(./img/sourceImages/gridImg.jpg)',
    backgroundSize: '100%',
    margin: 0,
    top: '-19px',
    position: 'relative',
    zIndex: '-1',
    left: '161px'
  }
}

const header = ({ classes }) => {

  let isScrolling;
  let stopped = [];

  const checkHeader = _.throttle(() => {
    if (document.querySelector('.header-mainNavWrapper-5-2-3') !== null) {
      stopped[0] = false;
      // detect scroll position
      let scrollPosition = [Math.round(window.scrollY)];

      // determine if scrolling
      if (stopped[0] === false) {
        document.querySelector('.header-mainNavWrapper-5-2-3').classList.add('scrolling');
        document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('sticky')
      }
      console.log('Scrolling has stopped: ', stopped);
      console.log('scrollPosition: ', scrollPosition);

      const runOnce = _.throttle(() => {
        window.clearTimeout(isScrolling);
        stopped[0] = true;

        isScrolling = setTimeout(() => {
          console.log('Scrolling has stopped: ', stopped);
          if (stopped[0] === true && scrollPosition[0] > 670) {
            console.log('triggering if statement');
            document.querySelector('.header-mainNavWrapper-5-2-3').classList.add('sticky');
            document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('scrolling')
          } else {
            document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('scrolling')
            document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('sticky')
          }
        }, 4000)

      }, 3000)

      runOnce();
    }
  }, 2000);

  window.addEventListener('scroll', checkHeader);

  return (
    <React.Fragment>
      <div className={classes.mainNavWrapper}>

        <nav className={classes.mainNav}>
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
            <p className={classes.mainDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor Lorem ipsum dolor.</p>
            <div className={classes.buttonWrapper}>
              <button className={classes.contactUs}> Contact Us</button>
              <button className={classes.learnMore}> Learn More</button>
            </div>

          </div>

        </div>

      </div>
      <div className={classes.whiteBkg}></div>
      <div className={classes.gridImg} id="gridImg"></div>

    </React.Fragment>
  )
}
const Header = injectSheet(styles)(header)
export default Header;

 // // if we've scrolled 630 px, add "sticky" class to header
      // if (scrollPosition > 630) {
      //   document.querySelector('.header-mainNavWrapper-3').classList.add('sticky');
      // } else {
      //   document.querySelector('.header-mainNavWrapper-3').classList.remove('sticky');
      // }
      // let prevScrollpos = window.pageYOffset;
      // window.onscroll = function() {
      //   let currentScrollPos = window.pageYOffset;

      //   if( prevScrollpos > currentScrollPos) {
      //     document.getElementById()
      //   }
      // }

      // onScroll, set isScrolling = true

      // if isScrolling is true


/**
 * if (document.querySelector('.header-mainNavWrapper-5-2-3') !== null) {
      document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('sticky');

      let isScrolling;
      let stopped = [false];

      console.log('Scrolling has stopped: ', stopped);
      // // detect scroll position
      let scrollPosition = Math.round(window.scrollY);
      console.log('scrollPosition: ', scrollPosition);

      window.clearTimeout(isScrolling);

      var promise = new Promise((resolve, reject) => {
        isScrolling = setTimeout(() => {
          stopped[0] = true;
          console.log('Scrolling has stopped: ', stopped);
          resolve();
        }, 2000)
      })

      promise.then(() => {
        if (stopped[0] && scrollPosition > 670) {
          console.log('triggering if statement');
          document.querySelector('.header-mainNavWrapper-5-2-3').classList.add('sticky');
          document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('scrolling')
        } else {
          document.querySelector('.header-mainNavWrapper-5-2-3').classList.add('scrolling')
          document.querySelector('.header-mainNavWrapper-5-2-3').classList.remove('sticky');
        }
      })
      document.querySelector('.header-mainNavWrapper-5-2-3').classList.add('scrolling')
    }
 */
