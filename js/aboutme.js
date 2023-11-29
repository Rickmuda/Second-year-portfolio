document.addEventListener('DOMContentLoaded', function () {
    const textBox = document.getElementById('text-box');
    const imageElement = document.getElementById('character-image');
    const cvImage = document.getElementById('image2'); // Assuming the ID of the CV image is 'image2'
    const textLines = [
        "Greetings.",
        "My name is Rick Ambergen, and I am a 21-year-old student at Alfa-College Groningen.",
        "I am currently studying Software Development, and I am in my second year.",
        "My favorite parts about software development are the problem-solving and the creativity.",
        "I enjoy solving problems, and I like to be creative with my solutions.",
        "In the future, I see myself doing fullstack development, but for right now, I am focusing on frontend development.",
        "But I am always open to learning new things, and I am always looking for new challenges.",
        "And in my spare time, I like to play video games, watch movies, and listen to music.",
        "My favorite game is Bloodborne, my favorite movie is Spiderman into the spiderverse, and my favorite artist is MF DOOM.",
        "If you are interested in my work, you can find my CV right here.",
        "Thank you for your time, and have a wonderful day."
    ];
  
    let currentLineIndex = 0;
    let typingSpeed = 50; // Adjust the typing speed as needed (milliseconds)
    let isTyping = false;
  
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
  
              setTimeout(typeNextCharacter, typingSpeed);
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
      if (currentLineIndex < textLines.length && !isTyping) {
        typeNextLine();
      }
    }
  
    // Play a sound when the page loads
    const onLoadSound = new Audio('../sfx/text_scroll_start.wav'); // Replace with your desired sound path
    onLoadSound.play();
  
    // Start typing the first line when the page loads
    typeNextLine();
  
    // Add a click event to the entire document to display the next line of text
    document.addEventListener('click', () => {
      displayNextLine();
    });
  
    // Additional code for handling animations
    function spinCVImage() {
      // Add a class to trigger the CSS spin animation for the CV image
      cvImage.classList.add('spin');
    }
  
    function handleSpecialLine() {
      // Detect when the line mentioning the CV is being displayed
      if (currentLineIndex === 2) { // Adjust the index based on your actual line number
        // Make the CV image visible and start spinning
        cvImage.style.display = 'block';
        spinCVImage();
      }
    }
  });
  