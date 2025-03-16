// Start-Toggle Video Function
window.addEventListener('resize', updateVideoSource);
window.addEventListener('load', updateVideoSource);

function updateVideoSource() {
  const videoElement = document.getElementById('MyVideo');
  const videoSource = document.getElementById('video-source');

  // Check if the screen width is less than or equal to 768px (for mobile view)
  if (window.innerWidth <= 768) {
      // Change the video source for mobile
      videoSource.src = 'assets/Section/Hero_Section/Video/Mobile_Hero_Video.mp4';
  } else {
      // Change the video source for desktop
      videoSource.src = 'assets/Section/Hero_Section/Video/Desktop_Hero_Video.mp4';
  }
  // Load the new video source
  videoElement.load();
}
//End-Toggle Video Function
//******************************************************************* */

//<!-- Start of Typing Effect-->

  const typed = new Typed('#typingParagraph', {
    strings: ['This effect is super cool!', "I'm going to use it.", 'All the time!'],
    typeSpeed: 100,
    loop: true  // This will make the text loop continuously
  });

  AOS.init(); // Initialize AOS

//End-Typing Effect
//******************************************************************* */


// Start-Video Speed Control(Desktop Video)
  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("MyVideo");
    video.playbackRate = 5.0; // 2x Speed
})
//End-Typing Effect
//******************************************************************* */


// Start-Mobile Nab Menu Vibrations Funtion
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navmenu ul li');
  
    navItems.forEach(item => {
      item.addEventListener('click', function () {
        // Check if the Vibration API is supported
        if ('vibrate' in navigator) {
          // Vibrate for 50 milliseconds
          navigator.vibrate(50);
        }
      });
    });
  });
//End--Mobile Nab Menu Vibrations Funtion
//******************************************************************* */
