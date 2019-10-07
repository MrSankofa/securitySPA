import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import $ from 'jquery';
import moment from 'moment-timezone';
import axios from 'axios';
import qs from 'qs';

const Contact = (props) => {
  const useStyles = makeStyles(theme => ({
    contactWrapper: {
      width: '100%',
      height: '680px',
      backgroundImage: 'url(\'./img/sourceImages/contactUs.jpg\')',
      backgroundRepeat: 'round',
      position: 'relative',
      borderRadius: '0 10% 0 0'
    },
    overlay: {
      width: '100%',
      height: '680px',
      position: 'absolute',
      backgroundColor: 'black',
      opacity: '0.5',
      borderRadius: '0 10% 0 0'
    },
    form: {
      width: '620px',
      height: '680px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    },
    field: {
      border: 'none',
      height: '32px',
      width: '220px',
      margin: '13px'
    },
    textArea: {
      width: '462px',
      height: '150px',
      marginTop: '10px'
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

    for (const o of document.forms) {
      for (const ele of o) {

        postReqData[ele.name] = ele.value;
      }
    }
    console.log('postReqData: ', postReqData);
    // axios({
    //   method: 'post',
    //   url: 'https://api.jjsecuritybros.com/contact',
    //   data: qs.stringify(postReqData)
    // })
    //   .then(results => {
    //     console.log('results: ', results);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     console.log('There was an error in making the post request');
    //   })
    axios({
      method: 'post',
      url: '/contact',
      data: qs.stringify(postReqData)
    })
      .then(results => {
        console.log('results from Contact form: ', results);
        if (results === 'success') {
          alert('contact form submitted')
        }
      })
      .catch(err => {
        console.error(err);
        console.log('There was an error in making the post request');
      })
    // axios({
    //   method: 'get',
    //   url: 'https://api.github.com/users/mrsankofa/repos'
    // })
    //   .then(results => {
    //     console.log('results: ', results);
    //   })
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

// console.log('o: ', o);
      // console.log('o type: ', typeof o);

// console.log('ele: ', ele);
        // console.log('ele name: ', ele.name);
        // console.log('ele value: ', ele.value);

// console.log('moment().format()', moment().format());
    // console.log('currentTime: ', currentTime);
    // console.log('currentTime: ', typeof currentTime);
    // var jun = moment(currentTime);
    // var dec = moment(currentTime);

    // console.log(jun.tz('America/Chicago').format('ha z'));  // 5am PDT
    // console.log(dec.tz('America/Chicago').format('ha z'));  // 4am PST
    // console.log('chicago: ', chicago.format());