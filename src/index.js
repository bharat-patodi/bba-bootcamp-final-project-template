const feedback = document.getElementById('feedback');
const feedbackSubmit = document.getElementById('feedback-submit');
const feedbackDisplay = document.getElementById('feedback-display');

feedbackSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const feedbackText = feedback.value;
    if (feedbackText.length > 0) {
        feedback.value = '';
        feedback.classList.remove('error');
        feedback.classList.add('success');
        feedback.placeholder = 'Thanks for your feedback!';
        feedbackDisplay.innerHTML = feedbackText;
        const feedbackColour = document.querySelector(
          'input[name="colour-blocks"]:checked'
        ).value;
        feedbackDisplay.style.color = feedbackColour;
    } else {
        feedback.classList.remove('success');
        feedback.classList.add('error');
        feedback.placeholder = 'Please enter your feedback!';
    }
});