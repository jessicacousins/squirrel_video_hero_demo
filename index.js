function toggleAudio() {
  const video = document.getElementById("dj-video");
  video.muted = !video.muted;
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".animate-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2,
  });

  gsap.from(".animate-subtext", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.6,
  });

  gsap.utils.toArray(".animate-fadein").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
});
