import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Review = props => {

  const useStyles = makeStyles(theme => ({
    review: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'inline-block',
        fontSize: '23px',
        color: '#8e8e8e'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '686px',
        display: 'inline-block',
        fontSize: '23px',
        color: '#8e8e8e'
      },

    },
    text: {
      [theme.breakpoints.down('sm')]: {
        whiteSpace: 'pre-line'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        whiteSpace: 'pre-line'
      },

    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.review}>
      <p className={classes.text}>{props.review.text}</p>
    </div>
  )
}

export default Review;