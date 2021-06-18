import { hamburger, navigation, backToTop, links } from './vars.js';
import { automaticalSlideChange } from './carousel.js';

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

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
links.forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});
automaticalSlideChange();
