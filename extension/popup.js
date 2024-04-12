document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the button
  var nextButton = document.getElementById('nextButton');

  // Add a click event listener to the button
  nextButton.addEventListener('click', function () {
    // Navigate to the next page
    window.location.href = 'popup2.html';
  });
});