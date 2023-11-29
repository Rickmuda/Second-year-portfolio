document.addEventListener('DOMContentLoaded', function () {
  const textBox = document.getElementById('text-box');
  const imageElement = document.getElementById('character-image');
  const cvImage = document.getElementById('image2'); // Assuming the ID of the CV image is 'image2'
  const nextLineAnchor = document.getElementById('nextLineAnchor'); // Get the anchor tag by ID
  const textLines = [
      "Greetings.",
      "My name is Rick Ambergen, and I am a 21-year-old student at Alfa-College Groningen.",
      "I am currently studying Software Development, and I am in my second year.",
      "My favorite parts about software development are the problem-solving and the creativity.",
      "I enjoy solving problems, and I like to be creative with my solutions.",
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

  function handleSpecialLine() {
    // Detect when the line mentioning the CV is being displayed
    if (currentLineIndex === 10) {
        // Make the CV image visible
        cvImage.style.display = 'block';  
    }
}

  // Event listener for the anchor tag
  nextLineAnchor.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      displayNextLine(); // Call the function to display the next line
  });
});
