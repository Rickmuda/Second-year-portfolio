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

        // After a delay, change the overlay's background to black (screen blackout)
        setTimeout(function() {
            overlay.style.transition = 'background 3s';
            overlay.style.background = 'rgba(0, 0, 0, 1)'; // Change 0.7 to control the opacity
        }, 1000); // 1000 milliseconds (1 second)

        // After another delay, redirect to another page
        setTimeout(function() {
            window.location.href = './html/saves.html'; // Replace with your new page URL
        }, 5000); // 2000 milliseconds (2 seconds)
    }

    document.addEventListener('keypress', redirectToNewPage);
    document.addEventListener('click', redirectToNewPage);
});
