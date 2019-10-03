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
      backgroundColor: '#fefefe',
      width: '686px'
    },
    reviewWrapper: {
      textAlign: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      backgroundColor: '#fefefe',
      margin: '0 auto'
    },
    review: {
      width: '686px',
      display: 'inline-block'
    },
    avatarSlider: {
      width: '100px',
      margin: '0 auto',
      backgroundColor: '#fefefe',
      overflow: 'hidden',
    },
    avatarWrapper: {
      width: '100 %',
      height: '100 %',
      display: 'inline-block'
    },
    avatar: {
      borderRadius: '50%'
    }
  }));
  const classes = useStyles();

  const [reviews, setReviews] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (1) {
      setReviews(8);
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
      setTranslateAvatarValue(translateAvatarValue + avatarWidth)
    }
  };

  const nextSlide = () => {
    const lastIndex = getLastIndex();
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    if (index === 0) {
      return setCurrentIndex(0), setTranslateValue(0), setTranslateAvatarValue(0);
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth);
    setTranslateAvatarValue(translateAvatarValue + -avatarWidth);
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