
function navigateToDynamicRoute(text) {
  // Get the text content of the centered paragraph
  var routeName = text.trim().replace(/\s+/g, '-').toLowerCase();

  // Navigate to the dynamically generated route
  window.location.href = '/' + routeName;
}

const imageContainer = document.getElementById('image-container');
const gifLikeImage = document.getElementById('gif-like-image');

// Array of image URLs
const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

let currentIndex = 0;

function changeImage() {
  gifLikeImage.src = imageUrls[currentIndex];
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Change image every 2000 milliseconds (2 seconds)
setInterval(changeImage, 2000);

// Initial image load
changeImage();
