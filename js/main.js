(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


// form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function (event) {
      let valid = true;
  
      if (name.value.trim() === "") {
        showError(name, "Name is required");
        valid = false;
      } else {
        clearError(name);
      }
  
      if (email.value.trim() === "") {
        showError(email, "Email is required");
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, "Email is not valid");
        valid = false;
      } else {
        clearError(email);
      }
  
      if (message.value.trim() === "") {
        showError(message, "Message is required");
        valid = false;
      } else {
        clearError(message);
      }
  
      if (!valid) {
        event.preventDefault();
      }
    });
  
    function showError(input, message) {
      const parent = input.parentElement;
      const error = parent.querySelector(".error-message");
      if (!error) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.innerText = message;
        parent.appendChild(errorMessage);
      }
    }
  
    function clearError(input) {
      const parent = input.parentElement;
      const error = parent.querySelector(".error-message");
      if (error) {
        parent.removeChild(error);
      }
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  