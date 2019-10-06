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
      '& li': {
        color: 'white'
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
      // jss-nested applies this to a child span
      fontWeight: 'bold' // jss-camel-case turns this into 'font-weight'
    },
    '&.scrolling': {
      opacity: '0',
      position: 'absolute',
      transition: 'opacity 1s ease'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
}

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ({ classes, children }) => (
  <div className={classes.mainNavWrapper}>

    <nav className={classes.mainNav}>
      <ul className={classes.ul}>
        <li><a href="#" >home</a></li>
        <li><a href="#">about us</a></li>
        <li><a href="#">packages</a></li>
        <li><a href="#">reviews</a></li>
        <li><a href="#" className={classes.current}>contact us</a></li>
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