import React from 'react';
// JSX
// import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider';
import { Stack } from '@chakra-ui/react';
import styled from 'styled-components';
// import Wrapper from '../UI/Wrapper/Wrapper';
// import Title from '../UI/Title/Title';
// import Subtitle from '../UI/Subtitle/Subtitle';
import { Heading, Button } from '@chakra-ui/react';

// Images
const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg';
const countyClare = 'https://i.imgur.com/idjXzVQ.jpg';
const craterRock = 'https://i.imgur.com/8DYumaY.jpg';
const giauPass = 'https://i.imgur.com/8IuucQZ.jpg';
/* eslint-disable-next-line */

const Wrapper = styled.div`
  max-width: 1000px;
  position: relative;
  margin: auto;
`;

export function HeroSliderComponent() {
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    console.log(slides);
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  return (
    <>
      <div class="mySlides">
        <div class="numbertext">1 / 3</div>
        <img src={bogliasco} style={{ width: '100%' }} alt="ja" />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides">
        <div class="numbertext">2 / 3</div>
        <img src={countyClare} style={{ width: '100%' }} alt="ja" />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides">
        <div class="numbertext">3 / 3</div>
        <img src={craterRock} style={{ width: '100%' }} alt="ja" />
        <div class="text">Caption Three</div>
      </div>

      <Button class="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </Button>
      <Button class="next" onclick={() => plusSlides(1)}>
        &#10095;
      </Button>
    </>
  );
}

export default HeroSliderComponent;
