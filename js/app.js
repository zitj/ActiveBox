import { hamburger, navigation, backToTop, links } from './vars.js';
import { automaticalSlideChange } from './carousel.js';

// backToTop button appearance
window.addEventListener('scroll', (event) => {
    if (window.pageYOffset >= 100) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo(document.body.scrollHeight, 0);
});

// toggle and close hamburger menu
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
links.forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});

// carousel
automaticalSlideChange();
