const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

yesButton.addEventListener('click', () => {
    window.location.href = 'result.html';
});

noButton.addEventListener('click', () => {
    window.location.href = 'no.html';
});