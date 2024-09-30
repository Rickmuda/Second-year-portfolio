document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo img');
    const overlay = document.querySelector('.overlay');

    function redirectToNewPage() {

        // Check if the logo element exists
        if (logo) {
            // Fade out the logo
            logo.style.opacity = '0';
            logo.style.transition = 'opacity 1s';
        }

        // After another delay, redirect to another page
        setTimeout(function() {
            window.location.href = './html/saves.html'; // Replace with your new page URL
        }, 1000); // 1000 milliseconds (1 seconds)
    }

    document.addEventListener('keypress', redirectToNewPage);
    document.addEventListener('click', redirectToNewPage);
});

document.getElementById('rickvlogs').onclick = function(event) {
    event.stopPropagation();
    window.location.href = '/html/password.html';
};