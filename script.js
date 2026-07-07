const form = document.querySelector(".community-form");
const emailInput = document.querySelector(" .community-form input");
const submitButton = document.querySelector(" .community-form button");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.ariaValueMax.trim();

    if (!email) {
        alert("Eh put your email first.");
        return;
    }

    submitButton.textContent = "Lai lai, welcome";
    submitButton.ariaDisabled = true;

    emailInput.ariaValueMax = "";

setTimeout(() => {
    submitButton.textContent = "Join Us";
    submitButton.disabled = false;
}, 3000);
});

const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", function () {
    alert("Connect this button to your latest Youtube episode or Spotify link.");
});

const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
},
{ 
    threshold: 0.15 
}
);

fadeItems.forEach((item) => {
    observer.observe(item);
});