/////////HOME//////////
//SLIDER://
jQuery(document).ready(function ($) {
  $(".gf-three-boxes").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrow: true,
    autoplay: true,
  });
});

///ACCORDION://////
jQuery(document).ready(function ($) {
  $("#accordion").accordion({
    collapsible: true,
  });
});

//COUNTER://
$(document).ready(function ($) {
  // Function to initialize the counter
  function initializeCounter() {
    $("#counterone").countMe(10, 50);
    $("#countertwo").countMe(10, 40);
  }

  // Function to check if element is in view
  function isInView(element) {
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Add event listener for scroll event
  $(window).on("scroll", function () {
    // Check if the section containing the counter is in view
    if (isInView("#gf-plus")) {
      // If it's in view, initialize the counter
      initializeCounter();
      // Once initialized, remove the event listener to avoid redundant counting
      $(window).off("scroll");
    }
  });

  // Check if the section containing the counter is already in view on page load
  if (isInView("#gf-plus")) {
    // If it's in view, initialize the counter
    initializeCounter();
  }
});

//$(document).ready(function($) {
// $(selector).countMe(delay,speed)

//$("#counterone").countMe(10,40);

//$("#countertwo").countMe(10,40);
//});

/////////////ABOUTUS-JS/////////////
$(function () {
  $("#graphic-accordion-container").accordion({
    collapsible: true,
  });
});
//counter//
function animateCounter(element, end, duration) {
  let start = 0;
  let current = start;
  const range = end - start;
  const startTime = new Date().getTime();
  const endTime = startTime + duration;
  let updated = false;

  const updateCounter = () => {
    const now = new Date().getTime();
    const remaining = Math.max((endTime - now) / duration, 0);
    const value = Math.round(end - remaining * range);
    // Ensure that the counter does not exceed the final value
    if (current !== value && !updated) {
      element.innerHTML = value < end ? `$${value}M+` : `$${end}M+`;
      current = value;
    }
    // Continue updating until we reach the end time
    if (value < end) {
      requestAnimationFrame(updateCounter);
    } else {
      updated = true; // Prevent further updates after reaching the end value
    }
  };

  updateCounter();
}

// Function to start the counter animation when in viewport
function startCounterAnimation() {
  const counters = document.querySelectorAll(".stats-column button");
  counters.forEach((counter) => {
    const endValue = parseInt(counter.getAttribute("data-count"), 10);
    if (isInViewport(counter)) {
      animateCounter(counter, endValue, 2000); // 2000ms = 2 seconds for animation
    }
  });
}

// Utility function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Listen for scroll events to trigger animations
window.addEventListener("scroll", startCounterAnimation);

// Initialize on document ready
document.addEventListener("DOMContentLoaded", startCounterAnimation);

///////SERVICES-JS//////
jQuery(document).ready(function ($) {
  $("#graphic-accordion-container").accordion({
    collapsible: true,
  });
});

//////////////CONTACTUS-JS/////////
//form//
$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      contact_number: {
        required: true,
        digits: true,
        minlength: 11,
        maxlength: 15,
      },
      email: {
        required: true,
        email: true,
      },
      query: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name must consist of at least 3 characters",
      },
      contact_number: {
        required: "Please enter your contact number",
        digits: "Please enter a valid phone number",
        minlength: "Your contact number must be at least 11 digits long",
        maxlength: "Your contact number must not exceed 15 digits",
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      query: {
        required: "Please enter your query or question",
        minlength: "Your query must consist of at least 5 characters",
      },
    },
    submitHandler: function (form) {
      // form submission code here
      alert("Form submitted successfully!");
      form.submit();
    },
  });
});
//  FORM END////
// FAQs Function//
jQuery(document).ready(function ($) {
  $("#accordion-FAQs").accordion({
    collapsible: true,
    active: false, // Start with all sections collapsed
    heightStyle: "content", // Adjust each panel size to its content
  });
});
