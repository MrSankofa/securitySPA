import React from 'react'
import { render } from 'react-dom'
// Import React-JSS
import injectSheet from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
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
    paddingTop: '2%',
    background: 'rgba(0,0,0,0.8)',
    width: '100%',
    opacity: '1',
    transition: 'width 2s ease',
    padding: '10px',
    '& .sticky': {
      position: 'fixed',
      top: '0px',
      opacity: '1',
      transition: 'opacity 1s ease',
      padding: '10px'
    },
    '&.scrolling': {
      opacity: '0',
      position: 'absolute',
      transition: 'opacity 1s ease'
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
  }
}

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ({ classes, children }) => (
  <div className={classes.mainNavWrapper}>

    <nav className={classes.mainNav}>
      <ul className={classes.ul}>
        <li className={classes.li} ><a href="#" >home</a></li>
        <li className={classes.li}><a href="#">about us</a></li>
        <li className={classes.li}><a href="#">packages</a></li>
        <li className={classes.li}><a href="#">reviews</a></li>
        <li className={classes.li}><a href="#" className={classes.current}>contact us</a></li>
      </ul>
    </nav>
  </div>
)

// Finally, inject the stylesheet into the component.
const Test = injectSheet(styles)(Button)

export default Test;

// You can also export the component with
// export default injectSheet(styles)(Button)

// import React from 'react';
// import jss from 'jss';
// import jssNested from 'jss-nested';
// import preset from 'jss-preset-default';
// jss.use(jssNested())

// const styles = {
//   wrapper: {
//     background: 'red',
//     color: 'white',
//     fontSize: 12
//   },
//   '& .ul': {
//     zIndex: '2',
//     textAlign: 'right',
//     listStyleType: 'none',
//     margin: '0px'
//   }
// };
// const { classes } = jss.createStyleSheet(styles).attach();

// const Test = props => {

//   return (
//     <div class={`${classes.wrapper}`}>
//       <ul class={`${classes.ul}`}>
//         <li><a href="#" >home</a></li>
//         <li><a href="#">about us</a></li>
//         <li><a href="#">packages</a></li>
//         <li><a href="#">reviews</a></li>
//         <li><a href="#" className={classes.current}>contact us</a></li>
//       </ul>
//     </div>
//   )
// }

// export default Test;