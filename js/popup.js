document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const closeOverlay = document.getElementById("close-overlay");

  // Show the overlay
  overlay.style.display = "flex";

  // Close the overlay when the close button is clicked
  closeOverlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
