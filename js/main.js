window.addEventListener('load', function () {
    const blackScreen = document.querySelector('.black-screen');
    blackScreen.addEventListener('animationend', function () {
        blackScreen.style.display = 'none'; // Hide the black screen when the animation ends
    });
});
