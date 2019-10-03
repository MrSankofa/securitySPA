// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// const GridSPA = (props) => {
//   const useStyles = makeStyles(theme => ({
//     paper: {
//       padding: theme.spacing(),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));
//   const classes = useStyles();
//   function FormRow() {
//     return (
//       <React.Fragment>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </React.Fragment>
//     );
//   }

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={0}>
//         <Grid container item xs={12} spacing={0}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={0}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={0}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default GridSPA;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const GridSPA = (props) => {
  const useStyles = makeStyles(theme => ({
    container: {
      margin: '0 74px',
      backgroundColor: '#fefefe',
      padding: '5% 0%'

    },
    item: {
      width: '33.3%',
      height: '100px',
      display: 'inline-block',
      margin: '0 auto',
      textAlign: 'center',
      paddingTop: '8%'
    },
    whiteBkg: {
      backgroundColor: '#fefefe'
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.whiteBkg}>
      <div className={classes.container}>
        <div className={classes.item}>
          <img src="./img/sourceImages/camera.jpg" height="110px" width="110px" />
          <h2>Your Next Title</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>
        </div>
        <div className={classes.item}>
          <img src="./img/sourceImages/camera.jpg" height="110px" width="110px" />
          <h2>Your Next Title</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>
        </div>
        <div className={classes.item}>
          <img src="./img/sourceImages/camera.jpg" height="110px" width="110px" />
          <h2>Your Next Title</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>
        </div>
        <div className={classes.item}>
          <img src="./img/sourceImages/camera.jpg" height="110px" width="110px" />
          <h2>Your Next Title</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>
        </div>
        <div className={classes.item}>
          <img src="./img/sourceImages/camera.jpg" height="110px" width="110px" />
          <h2>Your Next Title</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>
        </div>
        <div className={classes.item}>
          <img src="./img/sourceImages/camera.jpg" height="110px" width="110px" />
          <h2>Your Next Title</h2>
          <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed<br></br>do eiusmod tempor.</p>
        </div>
      </div>

    </div>
  )
}

export default GridSPA;

