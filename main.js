var clicked = false;

// Get the hamburger element
var hamburger = document.querySelector('.hamburger');

// Change the cursor to a hand when hovering over the hamburger element
hamburger.style.cursor = 'pointer';

hamburger.addEventListener('click', function() {
    if (!clicked) {
        // Hide div with class "tl-3"
        document.querySelector('.tl-3').style.display = 'none';

        // Expand and remove margin for div with class "tl-2"
        var tl2 = document.querySelector('.tl-2');
        tl2.style.width = '70%';
        tl2.style.height = '4px'
        tl2.style.marginTop = '-4px';
        tl2.style.backgroundColor = 'var(--col-1)';

        // Rotate 45 deg for div with class "tl-2"
        tl2.style.transform = 'rotate(45deg)';

        // Rotate -45 deg for div with class "tl-1"
        var tl1 = document.querySelector('.tl-1');
        tl1.style.width = '70%';
        tl1.style.marginTop = '4px';
        tl1.style.height = '4px'

        tl1.style.backgroundColor = 'var(--col-1)';

        tl1.style.transform = 'rotate(-45deg)';

        var menu = document.getElementById('menu-nav');
        menu.className = "menu-expand";
        
        clicked = true;

    } else {
        // Reset div with class "tl-3"
        document.querySelector('.tl-3').style.display = 'block';

        // Reset div with class "tl-2"
        var tl2 = document.querySelector('.tl-2');
        tl2.style.width = '80%';
        tl2.style.height = '5px'

        tl2.style.marginTop = '5px';
        tl2.style.backgroundColor = 'var(--col-1)';

        // Reset rotation for div with class "tl-2"
        tl2.style.transform = 'rotate(0deg)';

        // Reset rotation for div with class "tl-1"
        var tl1 = document.querySelector('.tl-1');
        tl1.style.transform = 'rotate(0deg)';
        tl1.style.backgroundColor = 'var(--col-1)';
        tl1.style.width = '100%';
        tl1.style.height = '5px';

        tl1.style.marginTop = '-.0';

        var menu = document.getElementById('menu-nav');
        menu.className = "menu";
        
        clicked = false;
    }
});

// Add event listener to the whole page
document.addEventListener('click', function(event) {
    // If the click was not on the hamburger menu or its children
    if (!event.target.closest('.hamburger')) {
        // Reset div with class "tl-3"
        document.querySelector('.tl-3').style.display = 'block';

        // Reset div with class "tl-2"
        var tl2 = document.querySelector('.tl-2');
        tl2.style.width = '80%';
        tl2.style.marginTop = '5px';
        tl2.style.backgroundColor = 'var(--col-1)';
        tl2.style.width = '80%';
        tl2.style.height = '5px'

        // Reset rotation for div with class "tl-2"
        tl2.style.transform = 'rotate(0deg)';

        // Reset rotation for div with class "tl-1"
        var tl1 = document.querySelector('.tl-1');
        tl1.style.transform = 'rotate(0deg)';
        tl1.style.marginTop = '-.0';
        tl1.style.backgroundColor = 'var(--col-1)';
        tl1.style.width = '100%';
        tl1.style.height = '5px';

        var menu = document.getElementById('menu-nav');
        menu.className = "menu";

        clicked = false;
    }
});

// hamburger end

// move - up and down of logo start

// Initial position
let scrollPos = 0;

// Add scroll event
window.addEventListener('scroll', function(){
  // Detect scroll position
  let currentScrollPos = window.pageYOffset;

  // Determine up-or-down scrolling
  if (currentScrollPos > scrollPos){
    // Scrolling Down
    document.querySelector('.title-logo-container').style.transform = 'translateY(-70px)';
  } else {
    // Scrolling Up
    document.querySelector('.title-logo-container').style.transform = 'translateY(0px)';
  }

  // Update scroll position
  scrollPos = currentScrollPos;
});

// move - up and down of logo start

// carosel img change
// window.addEventListener('resize', function() {
//   if (window.innerWidth >= 1025) {
//       document.getElementById('carosel_image-1').src = './Asssets/Images/lep-brandberg-2-1920.jpg';
//       document.getElementById('carosel_image-2').src = './Asssets/Images/lep-dune-pan-2.jpg';
//       document.getElementById('carosel_image-3').src = './Asssets/Images/lep-popafalls-1.jpg';
//       document.getElementById('carosel_image-4').src = './Asssets/Images/lep-dune-pan-1.jpg';
//       document.getElementById('carosel_image-5').src = './Asssets/Images/lep-swakop-jetty.jpg';
//   }
// });

function changeImages() {
  if (window.innerWidth >= 1025) {
      document.getElementById('carosel_image-1').src = './Asssets/Images/lep-brandberg-2-1920.jpg';
      document.getElementById('carosel_image-2').src = './Asssets/Images/lep-dune-pan-2.jpg';
      document.getElementById('carosel_image-3').src = './Asssets/Images/lep-popafalls-1.jpg';
      document.getElementById('carosel_image-4').src = './Asssets/Images/lep-dune-pan-1.jpg';
      document.getElementById('carosel_image-5').src = './Asssets/Images/lep-swakop-jetty.jpg';
  }
}

// Call the function as soon as the page loads
changeImages();

// Call the function every time the window is resized
window.addEventListener('resize', changeImages);

// carosel script


const track = document.querySelector('.carosel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carosel_button--right');
const prevButton = document.querySelector('.carosel_button--left');
const dotsNav = document.querySelector('.carosel_nav');
const dots = Array.from(dotsNav.children);

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.display = 'none';
  if (index === 0) {
    slide.style.display = 'block';
  }
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  currentSlide.style.display = 'none';
  targetSlide.style.display = 'block';
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else if (targetIndex === slides.length - 1) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};

// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.carosel_slide[style="display: block;"]');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.carosel_slide[style="display: block;"]');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
  // what indicator was clicked on?
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.carosel_slide[style="display: block;"]');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

document.querySelector('.carosel_button--left').style.display = 'none';
