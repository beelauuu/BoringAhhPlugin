var videoPlayer = document.createElement("video");
var container = document.getElementById("container");
container.style.margin = "0";
container.style.border = "none";
container.style.padding = "0";
container.style.width = "475px";
container.style.height = "325px";
container.style.overflow = "hidden"; // Add this line to hide the overflow

videoPlayer.style.border = "none";
videoPlayer.style.padding = "0";
videoPlayer.style.width = "100%";
videoPlayer.style.height = "100%";
videoPlayer.style.objectFit = "cover"; // Add this line to make the video fill the container
videoPlayer.style.background = "url('media/tv-static.gif')";

container.appendChild(videoPlayer);

document.getElementById("minecraftBtn").addEventListener("click", function() {
  videoPlayer.src = "media/minecraft.mp4";
  videoPlayer.play();
});

document.getElementById("subwayBtn").addEventListener("click", function() {
  videoPlayer.src = "media/subway.mp4";
  videoPlayer.play();
});

document.getElementById("stopBtn").addEventListener("click", function() {
  videoPlayer.pause();
  videoPlayer.src = "";
});

let muteButton = document.getElementById("muteButton");
let isMuted = false;

muteButton.addEventListener("click", function() {
  isMuted = !isMuted;
  videoPlayer.muted = isMuted;
  muteButton.textContent = isMuted ? "Unmute" : "Mute";
  muteButton.classList.toggle("muted", isMuted);
});