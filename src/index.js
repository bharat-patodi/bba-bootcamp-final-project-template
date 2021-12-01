const feedback = document.getElementById('feedback');
const feedbackSubmit = document.getElementById('feedback-submit');
const feedbackDisplay = document.getElementById('feedback-display');
const themeSwitcher = document.getElementById('theme-switcher');

feedbackSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const feedbackText = feedback.value;
    if (feedbackText.length > 0) {
        feedback.value = '';
        feedback.placeholder = 'Thanks for your feedback!';
        feedbackDisplay.innerText = '->  ' + feedbackText;
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
        headerNavLinks.forEach(link => {
            link.style.color = 'black';
        })
    } else {
        theme.remove('light-theme');
        theme.add('dark-theme');
        headerNavLinks.forEach(link => {
            link.style.color = '#fff';
        })
    }
});