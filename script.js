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

const loader = document.getElementById("#loader");

function hideLoader() {
    if (loader) {
        loader.classList.add("hide");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideLoader, 700);
});
setTimeout(hideLoader, 3000);