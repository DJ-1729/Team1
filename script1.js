var video = document.getElementById("bg-video");
video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});