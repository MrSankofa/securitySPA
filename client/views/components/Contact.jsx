import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import $ from 'jquery';
import moment from 'moment';

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

    const formData = [];
    const postReqData = {}
    for (const o of document.forms) {
      // console.log('o: ', o);
      // console.log('o type: ', typeof o);
      for (const ele of o) {
        // console.log('ele: ', ele);
        // console.log('ele name: ', ele.name);
        // console.log('ele value: ', ele.value);
        postReqData[ele.name] = ele.value;
        if (formData.length < 5) {
          formData.push(postReqData);
        }

      }


    }

    console.log('postReqData: ', postReqData);
    console.log('moment().format()', moment().format());


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