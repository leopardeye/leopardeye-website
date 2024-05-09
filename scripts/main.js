const mainMenu = document.querySelector('.main-menu');
const header = document.querySelector('.site-logo'); // Select the header
const hamburger = document.querySelector('.hamburger-menu');

let lastScrollTop = 0; // Declare lastScrollTop with let

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  mainMenu.classList.toggle('menu-active');
});


document.addEventListener('click', function(event) {
  if (hamburger.classList.contains('active') && !hamburger.contains(event.target) && !event.target.closest('.dropdown')) {
    hamburger.classList.remove('active');
    mainMenu.classList.remove('menu-active');
  }
});


window.addEventListener('scroll', function() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down
    header.style.transform = 'translateX(-50%) translateY(-90%)';
    hamburger.style.transform = 'translateX(150%)';
  } else {
    // User is scrolling up
    header.style.transform = 'translateX(-50%) translateY(0)';
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


    window.addEventListener("DOMContentLoaded", function() {
        const yourForm = document.getElementById('FORM_ID_NewsLetter');
        yourForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(yourForm);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            }).then(() => {
            // Get the current location
            let currentLocation = window.location.href;

            // Replace '/contact/' with '/thankyou/'
            let newLocation = currentLocation.replace('/contact/', '/thankyou/');

            // Redirect to the new location
            window.location.replace(newLocation);
            })
        })
    }); 





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
  }, { rootMargin, threshold: [0] }); // Adjust the threshold as per your needs

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


const linkContainerItems = document.querySelectorAll('.link-container-items');

linkContainerItems.forEach((item,) => {
  // Clone the node and all its children
  const clone = item.cloneNode(true);

  // Make the cloned content invisible to screen readers
  clone.setAttribute('aria-hidden', 'true');

  // Append the cloned node to the document
  item.parentNode.appendChild(clone);
});