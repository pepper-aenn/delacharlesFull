document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('image-container');
  const gifLikeImage = document.getElementById('gif-like-image');
  const landingpageContainer = document.querySelector('.container')

  let imageData; // Variable to store image data

  // Fetch JSON data
  fetch('./data/landingpage_data.json')
    .then(response => response.json())
    .then(data => {
      // Assign the entire JSON data to imageData
      imageData = data;

      let currentIndex = 0;

      function changeImage() {
        // Access imageUrl property from the current item in imageData array
        gifLikeImage.src = imageData[currentIndex].imageUrl;
        currentIndex = (currentIndex + 1) % imageData.length;
      }

      // Change image every 2000 milliseconds (2 seconds)
      setInterval(changeImage, 650);

      // Initial image load
      changeImage();
    })
    .catch(error => console.error('Error fetching JSON:', error));

  // Function to redirect to fashion page
  function redirectToFashion() {
    // Redirect to the desired route
    window.location.href = '/fashion';
  }

  landingpageContainer.addEventListener('click', redirectToFashion);
});


