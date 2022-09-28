const colors = ['crimson', '#D9F8C4', '#66BFBF', '#125B50','rgb(255,160,122)']

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function() {
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}