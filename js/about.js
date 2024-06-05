$(function () {
  $("#graphic-accordion-container").accordion({
    collapsible: true,
  });
});

//#############################################slider- GOHAR
// jQuery(document).ready(function ($) {
//   $(".gf-three-boxes").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     arrow: true,
//     autoplay: true,
//   });
// });
// jQuery(document).ready(function ($) {
//   $("#accordion").accordion({
//     collapsible: true,
//   });
// });

// form function*////////////////////////////////////////////////////////////////form function
// $(document).ready(function () {
//   $("#contact-form").submit(function (e) {
//     e.preventDefault();

//     var name = $("#name").val().trim();
//     var contactNumber = $("#contact-number").val().trim();
//     var email = $("#email").val().trim();
//     var query = $("#query").val().trim();

//     // Basic Validation Example
//     if (name === "" || contactNumber === "" || email === "" || query === "") {
//       alert("All fields are required.");
//       return;
//     }

//     // Further validation can be added here (like email regex check)

//     // If the form is valid, proceed to submit the form data
//     var formData = $(this).serialize(); // Serialize the form data

//     // You can now send the formData to your server using AJAX
//     $.ajax({
//       type: "POST",
//       url: "path-to-server-endpoint", // Replace with your server endpoint
//       data: formData,
//       success: function (response) {
//         // Handle success
//         alert("Form submitted successfully.");
//       },
//       error: function () {
//         // Handle error
//         alert("there is an error.");
//       },
//     });
//   });
// });
// $(document).ready(function () {
//   $("#contact-form").validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 2,
//       },
//       contact_number: {
//         required: true,
//         digits: true,
//         minlength: 11,
//         maxlength: 15,
//       },
//       email: {
//         required: true,
//         email: true,
//       },
//       query: {
//         required: true,
//         minlength: 5,
//       },
//     },
//     messages: {
//       name: {
//         required: "Please enter your name",
//         minlength: "Your name must consist of at least 10 characters",
//       },
//       contact_number: {
//         required: "Please enter your contact number",
//         digits: "Please enter a valid phone number",
//         minlength: "Your contact number must be at least 11 digits long",
//         maxlength: "Your contact number must not exceed 15 digits",
//       },
//       email: {
//         required: "Please enter your email address",
//         email: "Please enter a valid email address",
//       },
//       query: {
//         required: "Please enter your query or question",
//         minlength: "Your query must consist of at least 5 characters",
//       },
//     },
//     submitHandler: function (form) {
//       // form submission code here
//       alert("Form submitted successfully!");
//       form.submit();
//     },
//   });
// });

//#####################################################################################################//
// GALLERY TEMPLATE//

// FAQs Function//

$(function () {
  $("#accordion-FAQs").accordion({
    collapsible: true,
    active: false, // Start with all sections collapsed
    heightStyle: "content", // Adjust each panel size to its content
  });
});

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

////counter////

// // Function to animate counters
// function animateCounter(element, start, end, duration) {
//   let startTimestamp = null;
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp;
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//     element.innerHTML = Math.floor(progress * (end - start) + start);
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// }
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to start counter animations
// function startCounters() {
//   $(".stats-column button").each(function () {
//     const $this = $(this);
//     const countTo = $this.attr("data-count");
//     if (isInViewport($this[0])) {
//       animateCounter(
//         $this.find(".printing-amount")[0] || $this[0],
//         0,
//         parseInt(countTo),
//         2000
//       );
//     }
//   });
// }

// // On scroll, check if counters are in view and start animation
// $(window).on("scroll", function () {
//   startCounters();
// });

// // Initialize counters on document ready in case they are already in view
// $(document).ready(function () {
//   startCounters();
// });

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
