document.addEventListener('DOMContentLoaded', function () {
    const textBox = document.getElementById('text-box');
    const imageElement = document.getElementById('character-image');
    const textLines = [
      "Line 1: This is the first line of text.",
      "Line 2: Here's the second line of text.",
      "Line 3: This is the third line.",
      "Line 4: The fourth line is coming up.",
      "Line 5: Here's the fifth line of text.",
      "Line 6: This is the last line for this demonstrationasdasdasdasdasd asdasdasd asdasda asdasd asdasdasd asdasd asasas a a ."
    ];
  
    let currentLineIndex = 0;
    let typingSpeed = 50; // Adjust the typing speed as needed (milliseconds)
    let isTyping = false;
  
    const images = ['../img/self-image-1.png', '../img/self-image-2.png'];
    let currentImageIndex = 0;
  
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
              setTimeout(typeNextCharacter, typingSpeed);
            } else {
              // Text line is fully typed, increment the line index
              currentLineIndex++;
              isTyping = false;
              imageElement.src = '../img/self-image-1.png'; // Set the image to self-image-1 when typing is done
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
  
    // Start typing the first line when the page loads
    typeNextLine();
  
    // Add a click event to the entire document to display the next line of text
    document.addEventListener('click', () => {
      displayNextLine();
    });
  });
  