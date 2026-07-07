const playButton = document.querySelector(".play-button");

if (playButton) {
    playButton.addEventListener("click", function () {
        alert("Connect this button to your latest Youtube episode or Spotify link.");
    });
}

const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
},
{ 
    threshold: 0.12, 
}
);

fadeItems.forEach((item) => {
    observer.observe(item);
});

const loader = document.getElementById("loader");

function hideLoader() {
    if (loader) {
        loader.classList.add("hide");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideLoader, 700);
});
setTimeout(hideLoader, 3000);

const cursor = document.querySelector(".custom-cursor");
const cursorText = cursor?.querySelector("span");

if (window.matchMedia("(pointer: fine)").matches && cursor) {
  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  const cursorTargets = document.querySelectorAll(
    "a, button, .content-card, .hero-card, .story-card, .community-card, .video-wrap"
  );

  cursorTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      const label = target.dataset.cursor || "VIEW";

      cursor.classList.add("cursor-hover");

      if (cursorText) {
        cursorText.textContent = label;
      }
    });

    target.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");

      if (cursorText) {
        cursorText.textContent = "VIEW";
      }
    });
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.add("cursor-hidden");
  });

  document.addEventListener("mouseenter", () => {
    cursor.classList.remove("cursor-hidden");
  });
}
