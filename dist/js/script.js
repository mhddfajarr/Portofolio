// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

const contactForm = document.getElementById('contact-form');
const loader = document.querySelector('.loader')

loader.style.display = 'none';

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    loader.style.display = 'block';
    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: 'POST',
        body: formData,
        mode: "no-cors",
    }).then(() => {
        loader.style.display = 'none';
        window.location.href = "/thankYou.html";
    }).catch((e) => alert("Error occured"));
});