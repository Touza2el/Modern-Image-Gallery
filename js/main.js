// The Variables
const currentImage = document.querySelector("#current-image"); // HTML element = object
const images = document.querySelectorAll(".images img"); // NodeList, we can forEach method to iterate over it
const imageOpacity = 0.4;

// Set The First image opacity
images[0].style.opacity = imageOpacity;

// The Function
function imageClick(e) {
  // Change Current Image src to Clicked Image src
  currentImage.src = e.target.src;
  // Add fade-in Class
  currentImage.classList.add("fade-in");
  // Remove fade-in Class after 0.5s
  setTimeout(() => currentImage.classList.remove("fade-in"), 500);
  // Reset The Opacity
  images.forEach(item => (item.style.opacity = 1));
  // Change The opacity of Clicked Image
  e.target.style.opacity = imageOpacity;
}

// The Event
images.forEach(item => item.addEventListener("click", imageClick));
