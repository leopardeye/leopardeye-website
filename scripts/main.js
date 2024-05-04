const mainMenu = document.querySelector('.main-menu');
const header = document.querySelector('.site-logo'); // Select the header
const hamburger = document.querySelector('.hamburger-menu'); // Select the hamburger

let lastScrollTop = 0; // Declare lastScrollTop with let

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  mainMenu.classList.toggle('menu-active');
});

document.addEventListener('click', function(event) {
  if (hamburger.classList.contains('active') && !hamburger.contains(event.target)) {
    hamburger.classList.remove('active');
    mainMenu.classList.remove('menu-active');
  }
});

window.addEventListener('scroll', function() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down
    header.style.transform = 'translateY(-90%)';
    hamburger.style.transform = 'translateX(150%)';
  } else {
    // User is scrolling up
    header.style.transform = 'translateY(0)';
    hamburger.style.transform = 'translateX(0)';
  }
  
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
}, false);

window.onload = function() {
  // Replace 2024 with current year
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.querySelector('.copy-right');
  
  if (copyrightElement) {
    copyrightElement.textContent = copyrightElement.textContent.replace('2024', currentYear);
  } 
}

// intro hero text animation
// -------------------------

const introTextWrapperAnimate = document.querySelector('.intro-text-wrapper-animate');

if (introTextWrapperAnimate) {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0.1 && window.innerWidth >= 1440) {
      introTextWrapperAnimate.style.animation = 'rotateBack 0.6s forwards';
    } else if (scrollPosition === 0 && window.innerWidth >= 1440) {
      introTextWrapperAnimate.style.animation = 'rotateForward 0.6s forwards';
    } else {
      introTextWrapperAnimate.style.animation = '';
    }
  });
}

// commecial hero text animation
// ------------------------------

const commTextWrapperAnimate = document.querySelector('.commercial-text-wrapper-animate');

if (commTextWrapperAnimate) {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0.1 && window.innerWidth >= 1000) {
      commTextWrapperAnimate.style.animation = 'rotateBackComm 0.6s forwards';
    } else if (scrollPosition === 0 && window.innerWidth >= 1000) {
      commTextWrapperAnimate.style.animation = 'rotateForwardComm 0.6s forwards';
    } else {
      commTextWrapperAnimate.style.animation = '';
    }
  });
}


function observeElement(element, classNameIn, classNameOut, rootMargin) {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      element.classList.add(classNameIn);
      element.classList.remove(classNameOut);
    } else {
      element.classList.remove(classNameIn);
      element.classList.add(classNameOut);
    }
  }, { rootMargin });

  observer.observe(element);
}

document.querySelectorAll('.animate-fade').forEach((img) => {
  observeElement(img, 'fade-in', 'fade-out', '0px 0px -150px 0px');
});

document.querySelectorAll('.animate-scale').forEach((img) => {
  observeElement(img, 'scale-in', 'scale-out', '0px 0px -150px 0px');
});

document.querySelectorAll('.animate-scale-1').forEach((img) => {
  observeElement(img, 'scale-in-1', 'scale-out-1', '-100px 0px -100px 0px');
});

document.querySelectorAll('.hero-h5').forEach((img) => {
  observeElement(img, 'line-animate-in', 'line-animate-out', '-150px 0px -150px 0px');
});
// document.querySelectorAll('.transition-left').forEach((textTransitionInLeft) => {
//   observeElement(textTransitionInLeft, 'slide-in-animate', '0px 0px 0px 0px');
// });

// document.querySelectorAll('.map-location').forEach((mapLocation) => {
//   mapLocation.style.animationDelay = `${(Math.random() * 0.5 + 0.5).toFixed(2)}s`;
//   observeElement(mapLocation, 'opacity-in-animation');
// });

// document.querySelectorAll('.testimonial-wrapper').forEach((testimonialWrapper) => {
//   observeElement(testimonialWrapper, 'scale-in-animate');
// });

// document.querySelectorAll('.testimonial-wrapper-2').forEach((testimonialWrapperTwo) => {
//   observeElement(testimonialWrapperTwo, 'scale-in-animate');
// });

// document.querySelectorAll('.img-shadow-shadow-animation').forEach((imgShadowBox) => {
//   observeElement(imgShadowBox, 'opacity-in-animation', '0px 0px 0px 0px');
// });
