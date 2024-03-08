// script.js
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Add active class to navigation items when scrolling
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scrolling
        $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();
});
// script.js
$(document).ready(function () {
    // Toggle comment expansion
    $(".testimonial .comment").click(function () {
        $(this).toggleClass("expanded");
    });

    // Add hover effect to testimonials
    $(".testimonial").hover(
        function () {
            $(this).css({
                backgroundColor: "#f0f0f0", // Change background color on hover
                color: "#fff" // Change text color on hover
            });
        },
        function () {
            $(this).css({
                backgroundColor: "#FF7F7F", // Revert background color
                color: "#FF2400" // Revert text color
            });
        }
    );
});
// JavaScript for the Projects Section

$(document).ready(function() {
    // Show full project description when image is clicked
   
    // Show full project list when "Read More" button is clicked
    $('#showMoreBtn').click(function () {
        $('.project').fadeIn();
        $(this).hide();
    });

    // Toggle full project description when "Read More" button is clicked
    $('.read-more-btn').click(function() {
        $(this).prev('.project-description').find('.more-content').toggle(); // Toggle visibility of additional content
    });
    
});
// Function to handle image slider (basic implementation)
function slideImages(container) {
    let currentIdx = 0;
    container.addEventListener('click', (event) => {
      if (event.target.classList.contains('project-img')) {
        projectImgs.forEach((img, index) => img.classList.remove('active'));
        event.target.classList.add('active');
        currentIdx = index;
      }
    });
  }
  
