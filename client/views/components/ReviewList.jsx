import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Review from './Review.jsx';

const ReviewList = (props) => {

  const useStyles = makeStyles(theme => ({
    reviewCarousel: {
      [theme.breakpoints.down('md')]: {
        position: 'relative',
        margin: '8% auto',
        height: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        width: '100%',
        '& h1': {
          fontSize: '18px'
        },
        display: 'none'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        position: 'relative',
        margin: '8% auto',
        height: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        width: '686px'
      },

    },
    reviewWrapper: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        margin: '0 auto'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        margin: '0 auto'
      },

    },
    avatarSlider: {
      [theme.breakpoints.down('md')]: {
        width: '31%',
        margin: '0 auto',
        overflow: 'hidden',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '100px',
        margin: '0 auto',
        overflow: 'hidden',
      },

    },
    avatarWrapper: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100 %',
        display: 'inline-block'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '100 %',
        height: '100 %',
        display: 'inline-block'
      },

    },
    avatar: {
      [theme.breakpoints.down('md')]: {
        borderRadius: '50%'
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        borderRadius: '50%'
      },

    }
  }));
  const classes = useStyles();

  const [slides, setSlides] = useState();
  const [reviews, setReviews] = useState();
  const [avatar, setAvatar] = useState();


  useEffect(() => {
    if (props.slides !== undefined) {
      setSlides(props.slides);
      setReviews(props.reviews);
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);
  const [translateAvatarValue, setTranslateAvatarValue] = useState(0);

  const [slideWidth, setSlideWidth] = useState(686);
  const [sliderWidth, setSliderWidth] = useState({ width: 686 });

  const [avatarWidth, setAvatarWidth] = useState(100);
  const [avatarSliderWidth, setAvatarSliderWidth] = useState(100);

  const getLastIndex = () => {
    if (currentIndex >= slides) {
      return slides
    }

    return slides;
  }

  const previousSlide = () => {
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? 0 : currentIndex - 1

    setCurrentIndex(index);
    if (index !== 0) {
      setTranslateValue(translateValue + slideWidth);
      setTranslateAvatarValue(translateAvatarValue + avatarWidth)
    }
  };

  const nextSlide = () => {

    const lastIndex = getLastIndex();
    const shouldResetIndex = currentIndex === lastIndex - 1;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    if (index === 0) {
      return setCurrentIndex(0), setTranslateValue(0), setTranslateAvatarValue(0);
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth);
    setTranslateAvatarValue(translateAvatarValue + -avatarWidth);
  };

  return (
    <div className={classes.reviewCarousel}>
      <h1> What do our clients say about us?</h1>
      <div className={classes.reviewWrapper} style={{
        transform: `translateX(${translateValue}px)`,
        transition: 'transform ease-out 0.5s',
      }}>
        {
          props.reviews.map((review, i) => {
            return (
              <Review review={review} key={i} />
            )
          })
        }
      </div>
      <div className={classes.avatarSlider}>

        <div className={classes.avatarWrapper} style={{
          transform: `translateX(${translateAvatarValue}px)`,
          transition: 'transform ease-out 0.2s',
        }}>
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />
          <img className={classes.avatar} src='./img/sourceImages/avatarPhoto.jpg' height="100px" width="100px" />

        </div>
      </div>

      <div>
        <button onClick={previousSlide}>Prev review</button>
        <button onClick={nextSlide}>Next review</button>
      </div>

    </div>
  )
}

export default ReviewList;
