/* ------------------- */
/* LOADER */
/* ------------------- */
$(window).on('load', function () {
  $('.loader-bg').hide();
}) 

/* ------------------- */
/* ANIMATE ON SCROLL */
/* ------------------- */
AOS.init({
  offset: 120,
  duration: 1500,
});

/* ------------------- */
/* SCROLL INDICATOR PROGRESS BAR */
/* ------------------- */
const container = document.getElementById('scroll-progress-js-container');
const highlight = document.getElementById('scroll-progress-js-highlight');
var containerHeight;
window.onscroll = function(){
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = diff / containerHeight * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
}

/* ------------------- */
/* PARTICLES JS EFFECT */
/* ------------------- */
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);

/* ------------------- */
/* NAV LINK ACTIVE */
/* ------------------- */
const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ------------------- */
/* MOBILE NAV */
/* ------------------- */
const mobileNav = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  // activate mobile nav
  burger.addEventListener('click',() => {
    nav.classList.toggle('mobileNav-active');
    burger.classList.toggle('toggle')
  });
  // remove mobile nav
  const navItem = document.querySelectorAll('.nav-item');
  var i;
  for (i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click',() => {
      nav.classList.remove('mobileNav-active');
      burger.classList.remove('toggle');
    });
  }
}
mobileNav();

/* ------------------- */
/* TYPE WRITER EFFECT */
/* ------------------- */
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 4000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  var that = this;
  var delta = 2;
  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }
  setTimeout(function() {
  that.tick();
  }, delta);
};
window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #444}";
  document.body.appendChild(css);
};

/* ------------------- */
/* CAROUSEL SLIDER | TIMER */
/* ------------------- */
$('.carousel').carousel({
    interval : 3000
});

/* ------------------- */
/* MIXITUP FILTER */
/* ------------------- */
var conf = document.querySelector('.filterItem');
var mixer = mixitup(conf);

/* ------------------- */
/* FILTER LINK ACTIVE */
/* ------------------- */
const filterBtn = document.querySelectorAll('.filter-link');
function linkActive(){
  filterBtn.forEach(n => n.classList.remove('active'))
  this.classList.add('active');
}
filterBtn.forEach(n => n.addEventListener('click', linkActive));

/* ------------------- */
/* ANIMATED RADIAL PROGRESSBAR */
/* ------------------- */
$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });
  $(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }
).trigger('scroll');

/* ------------------- */
/* ANIMATED HORIZONTAL PROGRESSBAR */
/* ------------------- */
$(document).ready(function(){
  $('#bar1').barfiller({barColor: "#28a745", duration: 4000});
  $('#bar2').barfiller({barColor: "#28a745", duration: 4000});
  $('#bar3').barfiller({barColor: "#17a2b8", duration: 4000});
  $('#bar4').barfiller({barColor: "#28a745", duration: 4000});
  $('#bar5').barfiller({barColor: "#007bff", duration: 4000});
  $('#bar6').barfiller({barColor: "#17a2b8", duration: 4000});
  $('#bar7').barfiller({barColor: "#17a2b8", duration: 4000});
  $('#bar8').barfiller({barColor: "#86084e", duration: 4000});
  $('#bar9').barfiller({barColor: "#86084e", duration: 4000});
  $('#bar10').barfiller({barColor: "#86084e", duration: 4000});
}).trigger('scroll');

/* ------------------- */
/* SLICK SLIDER */
/* ------------------- */
$('.slickSlider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});