
function navigateToDynamicRoute(text) {
  // Get the text content of the centered paragraph
  var routeName = text.trim().replace(/\s+/g, '-').toLowerCase();

  // Navigate to the dynamically generated route
  window.location.href = '/' + routeName;
}
