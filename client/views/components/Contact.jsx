import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment-timezone';
import axios from 'axios';
import qs from 'qs';

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    contactWrapper: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '500px',
        backgroundImage: 'url(\'./img/sourceImages/contactUs.jpg\')',
        backgroundRepeat: 'round',
        position: 'relative',
        borderRadius: '0 10% 0 0'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '100%',
        height: '680px',
        backgroundImage: 'url(\'./img/sourceImages/contactUs.jpg\')',
        backgroundRepeat: 'round',
        position: 'relative',
        borderRadius: '0 10% 0 0'
      },

    },
    overlay: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '500px',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: '0.5',
        borderRadius: '0 10% 0 0'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '100%',
        height: '680px',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: '0.5',
        borderRadius: '0 10% 0 0'
      },

    },
    form: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '500px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '620px',
        height: '680px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      },

    },
    field: {
      [theme.breakpoints.down('md')]: {
        border: 'none',
        height: '32px',
        width: '200px',
        margin: '13px'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        border: 'none',
        height: '32px',
        width: '220px',
        margin: '13px'
      },

    },
    textArea: {
      [theme.breakpoints.down('md')]: {
        width: '75%',
        height: '100px',
        marginTop: '10px'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '462px',
        height: '150px',
        marginTop: '10px'
      },

    }
  }));
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    const postReqData = {}
    const currentTime = moment().format()
    const chicago = moment.tz(currentTime, "America/Chicago");
    const timeStamp = chicago.format();
    postReqData['timeSent'] = timeStamp;

    // collect data from forms
    for (const o of document.forms) {
      for (const ele of o) {

        postReqData[ele.name] = ele.value;
      }
    }
    console.log('postReqData: ', postReqData);
    axios({
      method: 'post',
      url: 'https://webhook.site/121d06e3-90f0-4d87-9440-0850da8fe8c6/contact',
      data: qs.stringify(postReqData)
    })
      .then(results => {
        if (results === 'success') {
          alert('contact form submitted')
        }
      })
      .catch(err => {
        console.error(err);
        console.log('There was an error in making the post request');
      })
  }





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
          <form onSubmit={submitForm} id="myForm">

            <div>
              <div>
                <input type="text" placeholder="First Name" className={classes.field} name="firstName" />
                <input type="text" placeholder="Last Name" className={classes.field} name="lastName" />

              </div>
              <div>
                <input type="text" placeholder="Phone Number" className={classes.field} name="phoneNumber" />
                <input type="text" placeholder="Email" className={classes.field} name="email" />
              </div>

              <div>
                <textarea type="text" placeholder="Your Message" className={classes.textArea} name="message" />
              </div>
              <input type="submit" style={{ "display": "none" }} />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact;