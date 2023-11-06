document.addEventListener('DOMContentLoaded', function() {
    const sound = new Audio('/sfx/OOT_PressStart.wav');
    sound.volume = 0.25; // Set the volume to 25%
    const logo = document.querySelector('.logo img');
    const overlay = document.querySelector('.overlay');

    function redirectToNewPage() {
        // Play a sound
        if (sound.readyState >= 2) {
            sound.play();
        }

        // Check if the logo element exists
        if (logo) {
            // Fade out the logo
            logo.style.opacity = '0';
            logo.style.transition = 'opacity 1s';
        }

        // After another delay, redirect to another page
        setTimeout(function() {
            window.location.href = './html/saves.html'; // Replace with your new page URL
        }, 2000); // 2000 milliseconds (2 seconds)
    }

    document.addEventListener('keypress', redirectToNewPage);
    document.addEventListener('click', redirectToNewPage);
});
