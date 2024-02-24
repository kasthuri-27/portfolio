function toggleImageDisplay() {
  var showImageButton = document.getElementById("show-image-button");
  var backButton = document.getElementById("backButton");
  var imageContainer = document.getElementById("image-container");

  showImageButton.addEventListener("click", function () {
    // Show the image container and hide the button
    imageContainer.style.display = "block";
    showImageButton.style.display = "none";
    // Show the back button
    backButton.style.display = "inline-block";
  });

  backButton.addEventListener("click", function () {
    // Hide the image container and show the button
    imageContainer.style.display = "none";
    showImageButton.style.display = "inline-block";
    // Hide the back button
    backButton.style.display = "none";
  });
}

// Call the function to set up event listeners
toggleImageDisplay();

function toggleVideoDisplay() {
  var showvideoButton = document.getElementById("show-video-button");
  var backButton = document.getElementById("backButton");
  var videoContainer = document.getElementById("video-container");

  showvideoButton.addEventListener("click", function () {
    // Show the image container and hide the button
    videoContainer.style.display = "block";
    showvideoButton.style.display = "none";
    // Show the back button
    backButton.style.display = "inline-block";
  });

  backButton.addEventListener("click", function () {
    // Hide the image container and show the button
    videoContainer.style.display = "none";
    showvideoButton.style.display = "inline-block";
    // Hide the back button
    backButton.style.display = "none";
  });
}

// Call the function to set up event listeners
toggleVideoDisplay();

function toggleAudioDisplay() {
  var showaudioButton = document.getElementById("show-audio-button");
  var backButton = document.getElementById("backButton");
  var audioContainer = document.getElementById("audio-container");

  showaudioButton.addEventListener("click", function () {
    // Show the image container and hide the button
    audioContainer.style.display = "block";
    showaudioButton.style.display = "none";
    // Show the back button
    backButton.style.display = "inline-block";
  });

  backButton.addEventListener("click", function () {
    // Hide the image container and show the button
    audioContainer.style.display = "none";
    showaudioButton.style.display = "inline-block";
    // Hide the back button
    backButton.style.display = "none";
  });
}

// Call the function to set up event listeners
toggleAudioDisplay();
