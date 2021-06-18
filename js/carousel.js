import {
    quote,
    author,
    carouselCirclesContainer,
    carouselCircles,
    imgContainer,
} from './vars.js';
import { DUMMY_DATA } from '../data/dummy_data.js';

let counter = 0;
let newCounter = 1;
let imgSlider = imgContainer.querySelector('#imgSlider');

quote.innerText = DUMMY_DATA[0].quote;
author.innerText = `${DUMMY_DATA[0].author}, ${DUMMY_DATA[0].jobTitle}`;

DUMMY_DATA.forEach((element) => {
    let div = document.createElement('div');
    div.classList.add('carouselCircle');
    div.classList.add('noSelect');
    carouselCirclesContainer.appendChild(div);
    let image = document.createElement('img');
    image.src = `${element.img}`;
    imgSlider.appendChild(image);
});
carouselCircles[0].classList.add('active');

let images = imgSlider.querySelectorAll('img');

const classRemover = () => {
    for (let i = 0; i < carouselCircles.length; i++) {
        carouselCircles[i].classList.remove('active');
    }
};

const imageSliderFunction = () => {
    imgSlider.style.transition = `transform .4s ease-in-out`;
    imgSlider.style.transform =
        'translateX(' + -images[0].clientWidth * newCounter + 'px';
    newCounter++;
    if (newCounter > images.length) {
        newCounter = 1;
        imgSlider.style.transform =
            'translateX(' +
            images[0].clientWidth / (images.length * 100) +
            'px';
    }
};

// document.addEventListener('click', (event) => {
//     if (
//         event.target.classList.contains('carouselCircle') &&
//         !event.target.classList.contains('active')
//     ) {

//         classRemover();

//         event.target.classList.add('active');
//         for (let i = 0; i < carouselCircles.length; i++) {
//             if (carouselCircles[i].classList.contains('active')) {
//                 quote.innerText = DUMMY_DATA[i].quote;
//                 author.innerText = `${DUMMY_DATA[i].author}, ${DUMMY_DATA[i].jobTitle}`;

//                 counter = i;
//             }
//         }
//     }
// });

export const automaticalSlideChange = () => {
    const changeCarouselContent = () => {
        quote.innerText = DUMMY_DATA[counter].quote;
        author.innerText = `${DUMMY_DATA[counter].author}, ${DUMMY_DATA[counter].jobTitle}`;
        classRemover();
        setTimeout(() => {
            imageSliderFunction();
        }, 3000);
        carouselCircles[counter].classList.add('active');
        counter++;
        if (counter === DUMMY_DATA.length) {
            counter = 0;
        }
    };

    let timer = setInterval(changeCarouselContent, 3000);
};
