let imageSlides = document.getElementsByClassName('imageSlides'),
    circles = document.getElementsByClassName('circle'),
    leftArrow = document.getElementById('leftArrow'),
    rightArrow = document.getElementById('rightArrow'),
    index = 0;

// To prevent other images from showing at thesame time
function hideImages() {
  for (let i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

function removeDots() {
  for (let i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('dot');
  }
}
// making only one dot visible
function imageLoop() {
  let currentImage = imageSlides[index];
  let currentDot = circles[index];
  currentImage.classList.add('visible');
  removeDots();
  currentDot.classList.add('dot');
  index++;
}

// For slide buttons
function arrowClick(e) {
  let target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (index == 1) {
      index = (imageSlides.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      index--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  } else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (index == imageSlides.length) {
      index = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 10000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


//This does the sliding
function slideshow() {
  if (index < imageSlides.length) {
    imageLoop();
  } else {
    index = 0;
    hideImages();
    imageLoop();
  }
}

setTimeout(slideshow, 1000);
let imageSlideshowInterval = setInterval(slideshow, 3000);