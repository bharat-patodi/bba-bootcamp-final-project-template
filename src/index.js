const feedback = document.getElementById('feedback-text');
const feedbackSubmit = document.getElementById('feedback-submit');
const feedbackDisplay = document.getElementById('feedback-display');
const themeSwitcher = document.getElementById('theme-switcher');
const heartCounter = document.getElementById('heart-counter');
let heartCount = 0;
feedbackSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hi");
    const feedbackText = feedback.value;
    if (feedbackText.length > 0) {
        feedback.value = '';
        feedback.placeholder = 'Thanks for your feedback!';
        feedbackDisplay.innerText = feedbackText;
        const feedbackColour = document.querySelector(
          'input[name="colour-blocks"]:checked'
        ).value;
        feedbackDisplay.style.color = feedbackColour;
    } else {
        feedback.placeholder = 'Please enter your feedback!';
    }
});

themeSwitcher.addEventListener('click', (e) => {
    let headerNavLinks = document.querySelectorAll('.header-nav-link');
    const theme = document.body.classList;
    if (theme.contains('dark-theme')) {
        theme.remove('dark-theme');
        theme.add('light-theme');
        // Edge Case -> The header nav links should be turned to black separately
        headerNavLinks.forEach(link => {
            link.style.color = 'black';
        });
        document.querySelector('#sun').style.display = 'none';
        document.querySelector("#moon").style.display = "inline-block";

    } else {
        theme.remove('light-theme');
        theme.add('dark-theme');
        // Edge Case -> The header nav links should be turned to white separately
        headerNavLinks.forEach(link => {
            link.style.color = '#fff';
        });
        document.querySelector('#moon').style.display = 'none';
        document.querySelector("#sun").style.display = "inline-block";
    }
});

heartCounter.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementsByClassName("toast").length) {
        document.getElementsByClassName("toast")[0].remove();
    }
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = ++heartCount;
    document.getElementsByClassName('heart')[0].appendChild(toast);
    // setTimeout(() => {
    //     toast.remove();
    // }, 2000);
});

// TODO:
// Improve links
//

