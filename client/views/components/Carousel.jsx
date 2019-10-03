import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Carousel = (props) => {
  const useStyles = makeStyles(theme => ({
    reviewCarousel: {
      position: 'relative',
      margin: '0 auto',
      height: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundColor: 'red',
      width: '686px'
    },
    reviewWrapper: {
      textAlign: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      backgroundColor: 'green',
      margin: '0 auto'
    },
    review: {
      width: '686px',
      display: 'inline-block'
    }
  }));
  const classes = useStyles();

  const [reviews, setReviews] = useState();

  useEffect(() => {
    if (1) {
      setReviews(7);
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);

  const [slideWidth, setSlideWidth] = useState(686);
  const [sliderWidth, setSliderWidth] = useState({ width: 686 });

  const getLastIndex = () => {
    if (!reviews) {
      return
    }

    return reviews.length - 1;
  }

  const previousSlide = () => {
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? 0 : currentIndex - 1

    setCurrentIndex(index);
    if (index !== 0) {
      setTranslateValue(translateValue + slideWidth);
    }
  };

  const nextSlide = () => {
    const lastIndex = getLastIndex();
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    if (index === 0) {
      return setCurrentIndex(0), setTranslateValue(0);
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth);
  };



  const [click, setClick] = useState(true);

  return (
    <div className={classes.reviewCarousel}>
      <h1> What do our clients say about us?</h1>
      <div className={classes.reviewWrapper} style={{
        transform: `translateX(${translateValue}px)`,
        transition: 'transform ease-out 0.5s',
      }}>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
        <div className={classes.review}>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolre magna <br></br> aliqua."</p>
        </div>
      </div>
      <div>
        <button onClick={previousSlide}>Prev review</button>
        <button onClick={nextSlide}>Next review</button>
      </div>

    </div>
  )
}

export default Carousel;