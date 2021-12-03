const feedbackSection = document.querySelector(".feedback");
const feedback = document.getElementById("feedback-text");
const feedbackSubmit = document.getElementById("feedback-submit");
const feedbackDisplay = document.getElementById("feedback-display");
const themeSwitcher = document.getElementById("theme-switcher");
const heartCounter = document.getElementById("heart-counter");
let heartCount = 0;
let feedbackColour = "#fff";

// Capture feedback text

feedbackSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  // document.querySelector(".highlight-green").style.color = "#6EE7B7";
  const feedbackText = feedback.value;
  if (feedbackText.length > 0) {
    feedback.value = "";
    feedback.placeholder = "Thanks for your feedback!";
    feedbackDisplay.innerText = feedbackText;
    feedbackDisplay.style.backgroundColor = "#2d2d2d";
    switchBackground();
    feedbackDisplay.style.color = feedbackColour;
  } else {
    feedback.placeholder = "Please enter your feedback!";
  }
});

// Switch the background colour by listening to radio button choice

document.querySelector('.note-colours').addEventListener('click', (e) => {
    if(e.target.tagName === 'INPUT') {
    switchBackground();
}});

// Theme Switching Logic

themeSwitcher.addEventListener("click", (e) => {
  let headerNavLinks = document.querySelectorAll(".header-nav-link");
  const theme = document.body.classList;
  if (theme.contains("dark-theme")) {
    theme.remove("dark-theme");
    theme.add("light-theme");
    // Edge Case -> The header nav links should be turned to black separately
    headerNavLinks.forEach((link) => {
      link.style.color = "black";
    });
    document.querySelector("#sun").style.display = "none";
    document.querySelector("#moon").style.display = "inline-block";
  } else {
    theme.remove("light-theme");
    theme.add("dark-theme");
    // Edge Case -> The header nav links should be turned to white separately
    headerNavLinks.forEach((link) => {
      link.style.color = "#fff";
    });
    document.querySelector("#moon").style.display = "none";
    document.querySelector("#sun").style.display = "inline-block";
  }
});

// Heart Counter

heartCounter.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementsByClassName("toast").length) {
    document.getElementsByClassName("toast")[0].remove();
  }
  const toast = document.querySelector("#toast");
  toast.innerText = "+" + (++heartCount + 32);
});

const switchBackground = () => {
  const inputColour = document.querySelector(
    'input[name="colour-blocks"]:checked'
  ).value;
  switch (inputColour) {
    case "red":
      feedbackColour = "#F87171";
      break;
    case "green":
      feedbackColour = "#ECFDF5";
      break;
    case "blue":
      feedbackColour = "#67E8F9";
      break;
    case "yellow":
      feedbackColour = "#FCD34D";
      break;
    case "orange":
      feedbackColour = "#FDBA74";
      break;
    // default:
    //   feedbackColour = "#fff";
  }

  feedbackSection.style.backgroundColor = feedbackColour;
};
