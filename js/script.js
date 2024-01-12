
var menuTimeout;

document.getElementById('toggleMenu').addEventListener('mouseover', function() {
  var menu = document.getElementById('hiddenMenu');
  menu.classList.add('show');
});

document.getElementById('toggleMenu').addEventListener('mouseleave', function() {
  var menu = document.getElementById('hiddenMenu');
  menuTimeout = setTimeout(function() {
    menu.classList.remove('show');
  }, 300);
});

document.getElementById('hiddenMenu').addEventListener('mouseenter', function() {
  clearTimeout(menuTimeout);
});

document.getElementById('hiddenMenu').addEventListener('mouseleave', function() {
  var menu = this;
  menu.classList.remove('show');
});


function showArrows() {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  prevButton.style.display = 'block';
  nextButton.style.display = 'block';
}

function hideArrows() {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
}

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselContainer = document.querySelector('.carousel-container');

let counter = 0;
const slideWidth = document.querySelector('.carousel-slide').clientWidth;
const totalSlides = document.querySelectorAll('.carousel-slide').length;
const visibleSlides = 6; // Número de slides visíveis
const slidesPerPage = Math.ceil(totalSlides / visibleSlides);
let maxCounter = slidesPerPage - 1;

prevButton.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  carouselContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
});

nextButton.addEventListener('click', () => {
  if (counter < maxCounter) {
    counter++;
    carouselContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
  } else if (totalSlides % visibleSlides !== 0 && counter === maxCounter) {
    counter = slidesPerPage;
    carouselContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const carouselImages = document.querySelectorAll('.carousel-img');
  const mainContainer = document.getElementById('main-container');

  carouselImages.forEach(function(image) {
      image.addEventListener('mouseover', function() {
          const imageUrl = this.getAttribute('src');
          mainContainer.innerHTML = `<img src="${imageUrl}" alt="">`;
      });
  });
});


function showArrows2() {
  const prevButton2 = document.querySelector('.prev-button2');
  const nextButton2 = document.querySelector('.next-button2');
  prevButton2.style.display = 'block';
  nextButton2.style.display = 'block';
}

function hideArrows2() {
  const prevButton2 = document.querySelector('.prev-button2');
  const nextButton2 = document.querySelector('.next-button2');
  prevButton2.style.display = 'none';
  nextButton2.style.display = 'none';
}

const prevButton2 = document.querySelector('.prev-button2');
const nextButton2 = document.querySelector('.next-button2');
const carouselContainer2 = document.querySelector('.carousel-container2');

let counter2 = 0;
const slideWidth2 = document.querySelector('.carousel-slide2').clientWidth;
const totalSlides2 = document.querySelectorAll('.carousel-slide2').length;
const visibleSlides2 = 6; // Número de slides visíveis
const slidesPerPage2 = Math.ceil(totalSlides2 / visibleSlides2);
let maxCounter2 = slidesPerPage2 - 1;

prevButton2.addEventListener('click', () => {
  counter2--;
  if (counter2 < 0) {
    counter2 = 0;
  }
  carouselContainer2.style.transform = `translateX(${-slideWidth2 * counter2}px)`;
});

nextButton2.addEventListener('click', () => {
  if (counter2 < maxCounter2) {
    counter2++;
    carouselContainer2.style.transform = `translateX(${-slideWidth2 * counter2}px)`;
  } else if (totalSlides2 % visibleSlides2 !== 0 && counter2 === maxCounter2) {
    counter2 = slidesPerPage2;
    carouselContainer2.style.transform = `translateX(${-slideWidth2 * counter2}px)`;
  }
});



function showArrows3() {
  const prevButton3 = document.querySelector('.prev-button3');
  const nextButton3 = document.querySelector('.next-button3');
  prevButton3.style.display = 'block';
  nextButton3.style.display = 'block';
}

function hideArrows3() {
  const prevButton3 = document.querySelector('.prev-button3');
  const nextButton3 = document.querySelector('.next-button3');
  prevButton3.style.display = 'none';
  nextButton3.style.display = 'none';
}

const prevButton3 = document.querySelector('.prev-button3');
const nextButton3 = document.querySelector('.next-button3');
const carouselContainer3 = document.querySelector('.carousel-container3');

let counter3 = 0;
const slideWidth3 = document.querySelector('.carousel-slide3').clientWidth;
const totalSlides3 = document.querySelectorAll('.carousel-slide3').length;
const visibleSlides3 = 6; // Número de slides visíveis
const slidesPerPage3 = Math.ceil(totalSlides3 / visibleSlides3);
let maxCounter3 = slidesPerPage3 - 1;

prevButton3.addEventListener('click', () => {
  counter3--;
  if (counter3 < 0) {
    counter3 = 0;
  }
  carouselContainer3.style.transform = `translateX(${-slideWidth3 * counter3}px)`;
});

nextButton3.addEventListener('click', () => {
  if (counter3 < maxCounter3) {
    counter3++;
    carouselContainer3.style.transform = `translateX(${-slideWidth3 * counter3}px)`;
  } else if (totalSlides3 % visibleSlides3 !== 0 && counter3 === maxCounter3) {
    counter3 = slidesPerPage3;
    carouselContainer3.style.transform = `translateX(${-slideWidth3 * counter3}px)`;
  }
});
