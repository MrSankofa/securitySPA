import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    contactWrapper: {
      width: '100%',
      height: '680px',
      backgroundImage: 'url(\'./img/sourceImages/contactUs.jpg\')',
      backgroundRepeat: 'round',
      position: 'relative'
    },
    overlay: {
      width: '100%',
      height: '680px',
      position: 'absolute',
      backgroundColor: 'black',
      opacity: '0.5'
    },
    form: {
      width: '620px',
      height: '680px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.contactWrapper}>

        <div className={classes.overlay}>

        </div>
        <div className={classes.form}>
          <h4 style={{
            color: '#3390e9'
          }}>contact us</h4>
          <h1 style={{
            color: '#fefefe'
          }}> Still not sure? We are here to help</h1>

          <div>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />

            </div>
            <div>
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Email" />

            </div>

            <div>
              <input type="text" placeholder="Your Message" />
            </div>
          </div>



        </div>

      </div>
    </React.Fragment>
  )
}

export default Contact;