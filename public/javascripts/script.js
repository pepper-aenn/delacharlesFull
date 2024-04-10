
// Function to navigate to dynamic route
function navigateToDynamicRoute(text) {
  var routeName = text.trim().replace(/\s+/g, '-').toLowerCase();

  // Check if it's not a detailed view page
  if (!document.body.classList.contains('detailed-view')) {
      // Navigate to the dynamically generated route
      window.location.href = '/' + routeName;
  }
}

// Function to navigate to dynamic detail route
function navigateToDynamicDetailRoute(text) {
  var routeName = text.trim().replace(/\s+/g, '-').toLowerCase();

  // Check if it's not a detailed view page
  if (!document.body.classList.contains('detailed-view')) {
      // Navigate to the dynamically generated detail route
      window.location.href = '/detail/' + routeName;
  }
}

// Function to hide image on mouseover
function hideImage(element) {
  // Check if it's not a detailed view page
  if (!document.body.classList.contains('detailed-view')) {
      // Hide the image
      element.style.opacity = 0;
  }
}

// Function to show image on mouseout
function showImage(element) {
  // Check if it's not a detailed view page
  if (!document.body.classList.contains('detailed-view')) {
      // Show the image
      element.style.opacity = 1;
  }
}
