// Select carousel div
var carousel = document.querySelector(".carouselbox");
// Select prev and next buttons
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// add click event handler to carousel
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// add click event handler to the next button
next.addEventListener("click", function(event) {
  // stop event propagation up to the carousel
  event.stopPropagation();

  navigate(1);
});

// add click event handler to the prev button
prev.addEventListener("click", function(event) {
  // stop event propagation up to the carousel, without this the event would call the carousel click handler and navigate the page to the image
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
