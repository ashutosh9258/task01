// Get the navigation bar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the vertical scroll position is greater than 50 pixels
    if (window.scrollY > 50) {
        // If scrolled down, add the 'scrolled' class
        navbar.classList.add('scrolled');
    } else {
        // If near the top, remove the 'scrolled' class
        navbar.classList.remove('scrolled');
    }
});

// Note: The hover effect is handled purely by the CSS defined in style.css
