document.addEventListener('DOMContentLoaded', function () {
  const textBox = document.getElementById('text-box');
  const imageElement = document.getElementById('character-image');
  const textLines = [
      "Greetings.",
      "Line 2: Here's the second line of text.",
      "Line 3: This is the third line.",
      "Line 4: The fourth line is coming up.",
      "Line 5: Here's the fifth line of text.",
      "Line 6: This is the last line for this demonstrationasdasdasdasdasd asdasdasd asdasda asdasd asdasdasd asdasd asasas a a ."
  ];
  
  let currentLineIndex = 0;
  let typingSpeed = 50; // Adjust the typing speed as needed (milliseconds)
  let isTyping = false;
  
  const images = ['../img/about_me/self-image-1.png', '../img/about_me/self-image-2.png'];
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
                      imageElement.src = '../img/about_me/self-image-1.png'; // Set the image to self-image-1 when typing is done
                      
                      // Pause the audio when typing is done
                      audioElement.pause();
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
});

if (currentLineIndex === 3) {
    let imageElement1 = document.getElementById('image1');
    let imageElement2 = document.getElementById('image2');
    imageElement1.src = '../img/about_me/hand.png';
    imageElement2.src = '../img/about_me/CV.png';
    imageElement1.style.display = 'block';
    imageElement2.style.display = 'block';
}
