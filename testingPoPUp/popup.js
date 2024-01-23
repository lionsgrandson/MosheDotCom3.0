document.addEventListener("DOMContentLoaded", function () {
  const popupOverlay = document.getElementById("popup-overlay");
  const closePopup = document.getElementById("close-popup");

  // Show the popup
  setTimeout(function () {
    popupOverlay.style.display = "flex";
  }, 3000); // Display the popup after 3 seconds (adjust as needed)

  // Close the popup when the close button is clicked
  closePopup.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });
});
