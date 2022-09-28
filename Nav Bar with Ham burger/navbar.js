const hamBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

hamBtn.addEventListener('click',function(){
    links.classList.toggle('show-links');
});
