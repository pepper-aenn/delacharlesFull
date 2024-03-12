function navigateToDynamicRoute(text) {
  var routeName = text.trim().replace(/\s+/g, '-').toLowerCase();

  // Navigate to the dynamically generated route
  window.location.href = '/detail/' + routeName;
}
