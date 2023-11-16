document.addEventListener("DOMContentLoaded", function() {
  let images = [
    { id: "cl", src: "img/cl.jpg" },
    { id: "dr", src: "img/dr.jpg" },
    { id: "lisa", src: "img/lisa.jpg" },
    { id: "ds3", src: "img/ds3.jpg" },
    { id: "mc", src: "img/mc.jpg" },
    { id: "bb", src: "img/bb.jpg" },
    { id: "ut", src: "img/ut.jpg" }
  ];
  let currentIndex = 0;

  // Randomize the order of the images
  images = shuffleArray(images);

  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const imageContainer = document.getElementById("imageContainer");

  let imageElement; // Declare the imageElement variable

  backBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  function updateImage() {
    const image = images[currentIndex];

    // Remove the previous image element if it exists
    if (imageElement) {
      imageContainer.removeChild(imageElement);
    }

    imageElement = document.createElement("img");
    imageElement.id = image.id;
    imageElement.src = image.src;

    // Wrap the image element in an anchor tag
    const anchorElement = document.createElement("a");
    anchorElement.href = "#" + image.id;
    anchorElement.appendChild(imageElement);

    imageContainer.appendChild(anchorElement);
  }

  // Function to shuffle the array elements
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Add mouseover event listener to the image
  document.addEventListener("mouseover", function(event) {
    if (event.target.matches("img")) {
      event.target.style.transform = "scale(1.2)";
    }
  });

  // Add mouseout event listener to the image
  document.addEventListener("mouseout", function(event) {
    if (event.target.matches("img")) {
      event.target.style.transform = "scale(1)";
    }
  });

  // Initial image setup
  updateImage();
});
