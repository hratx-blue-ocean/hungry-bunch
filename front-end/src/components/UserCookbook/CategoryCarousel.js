import React, {useState} from 'react';

//npm i react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';

import SingleCategory from './SingleCategory.js';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const useStyles = makeStyles(()=>({
  padding: {
    padding: '10px'
  }
}));


const CategoryCarousel = () => {

  //categories are currently placeholders, will need to access state for categories later
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Miscellaneous'];
  const categorypictures = ['https://i.imgur.com/e73cWzB.jpeg', 'https://i.imgur.com/WHpUNJk.jpeg', 'https://imgur.com/3HXBEI6.jpeg', 'https://imgur.com/epfHCXK.jpeg'];

  const classes = useStyles();


  return (
    <>
      <p>Hi, I am carousel
      </p>
      <Carousel
        centerMode={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        //itemClass={classes.padding}
      >
        {/*
           autoPlay={this.props.deviceType !== "mobile" ? true : false}
           deviceType={this.props.deviceType}
        */}

        {categories.map(function(currentCategory, index) {
          //console.warn(currentCategory, index)
          return (<div key={index}><SingleCategory categoryName = {currentCategory} picture={categorypictures[index]} /></div>);
        })}

        { /*
        <div>Breakfast</div>
        <div>Lunch</div>
        <div>Dinner</div>
        <div>Miscellaneous</div>
        */}
      </Carousel>

    </>
  );

};

export default CategoryCarousel;