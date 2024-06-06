document.addEventListener('DOMContentLoaded', function () {
    const textBox = document.getElementById('text-box');
    const imageElement = document.getElementById('character-image');
    const cvImage = document.getElementById('image2'); // Assuming the ID of the CV image is 'image2'
    const nextLineAnchor = document.getElementById('nextLineAnchor'); // Get the anchor tag by ID
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Calculate age dynamically based on birthdate
    const birthDate = new Date(2002, 3, 23); // April 23, 2002
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    const textLines = [
        "Greetings.",
        `My name is Rick Ambergen, and I am a ${age}-year-old student at Alfa-College Groningen.`,
        "I am currently studying Software Development, and I am in my second year.",
        "My favorite parts about software development are the creativity and the endless possibilities that coding can make.",
        "I enjoy solving problems, and I like to be creative with my solutions so I can solve problems in my own way.",
        "In the future, I see myself doing fullstack development. But for right now, I am focusing on frontend development.",
        "But I am always open to learning new things, and I am always looking for new challenges.",
        "And in my spare time, I like to play video games, watch movies and listen to music.",
        "My favorite game is Bloodborne, my favorite movie is Spiderman into the spiderverse and my favorite artists are MF DOOM and Tyler the creator.",
        "If you are interested in my work, you can find my CV to my right.",
        "Thank you for your time, and have a wonderful day."
    ];

    let currentLineIndex = 0;
    let typingSpeed = 40; // Adjust the typing speed as needed (milliseconds)
    let isTyping = false;
    let typingTimeout; // Variable to hold the typing timeout

    const images = ['../img/about-me/self-image-1.png', '../img/about-me/self-image-2.png'];
    let currentImageIndex = 0;

    // Create an audio element and set the source to the new sound path
    const audioElement = new Audio('../sfx/text_scroll.wav');

    function toggleImage() {
        currentImageIndex = 1 - currentImageIndex;
        imageElement.src = images[currentImageIndex];
    }

    function typeNextLine() {
        if (currentLineIndex < textLines.length) {
            if (!isTyping) {
                isTyping = true;
                textBox.textContent = ''; // Clear the existing text
                const lineToType = textLines[currentLineIndex];
                let index = 0;

                function typeNextCharacter() {
                    if (index < lineToType.length) {
                        toggleImage(); // Toggle the image while typing
                        textBox.textContent += lineToType.charAt(index);
                        index++;
                        // Play the audio when typing a character
                        audioElement.play();

                        typingTimeout = setTimeout(typeNextCharacter, typingSpeed);
                    } else {
                        // Text line is fully typed, increment the line index
                        currentLineIndex++;
                        isTyping = false;
                        imageElement.src = '../img/about-me/self-image-1.png'; // Set the image to self-image-1 when typing is done

                        // Pause the audio when typing is done
                        audioElement.pause();

                        // Handle special line (e.g., showing and spinning the CV image)
                        handleSpecialLine();
                    }
                }

                typeNextCharacter();
            }
        }
    }

    function displayNextLine() {
        if (isTyping) {
            // If typing is in progress, clear the timeout to stop it
            clearTimeout(typingTimeout);
            isTyping = false;
            currentLineIndex++; // Move to the next line
        }
        if (currentLineIndex < textLines.length) {
            typeNextLine();
        } else {
            // Ensure the sounds are stopped when reaching the last line
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }

    function displayPreviousLine() {
        if (isTyping) {
            // If typing is in progress, clear the timeout to stop it
            clearTimeout(typingTimeout);
            isTyping = false;
            currentLineIndex--; // Move back one line
        }
        if (currentLineIndex > 0) {
            currentLineIndex -= 1; // Go back one line and prepare to type it
            typeNextLine();
        }
    }

    // Play a sound when the page loads
    const onLoadSound = new Audio('../sfx/text_scroll_start.wav'); // Replace with your desired sound path
    onLoadSound.play();

    // Start typing the first line when the page loads
    typeNextLine();

    function handleSpecialLine() {
        // Detect when the line mentioning the CV is being displayed
        if (currentLineIndex === 10) {
            // Make the CV image visible
            cvImage.style.display = 'block';  
        }
    }

    // Event listeners for the anchor and arrow tags
    nextLineAnchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        displayNextLine(); // Call the function to display the next line
    });

    leftArrow.addEventListener('click', function () {
        displayPreviousLine(); // Call the function to display the previous line
    });

    rightArrow.addEventListener('click', function () {
        displayNextLine(); // Call the function to display the next line
    });

    // Event listener for keyboard arrow keys
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            displayPreviousLine();
        } else if (event.key === 'ArrowRight') {
            displayNextLine();
        }
    });
});
