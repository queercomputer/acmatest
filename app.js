document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileLinks = document.getElementById('mobile-links');
  
    hamburger.addEventListener('click', function(event) {
        event.preventDefault();
        mobileLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
  });