import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Review = props => {

  const useStyles = makeStyles(theme => ({
    review: {
      width: '686px',
      display: 'inline-block',
      fontSize: '23px',
      color: '#8e8e8e'
    },
    text: {
      whiteSpace: 'pre-line'
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