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

// "Load data for testemonials"
DUMMY_DATA.forEach((element) => {
    //add carousel circles
    let div = document.createElement('div');
    div.classList.add('carouselCircle');
    div.classList.add('noSelect');
    carouselCirclesContainer.appendChild(div);

    //add images to container
    let image = document.createElement('img');
    image.src = `${element.img}`;
    imgSlider.appendChild(image);
});

let images = imgSlider.querySelectorAll('img');

carouselCircles[0].classList.add('active');

const classRemover = () => {
    for (let i = 0; i < carouselCircles.length; i++) {
        carouselCircles[i].classList.remove('active');
    }
};

const imageSlide = () => {
    imgSlider.style.transition = `transform .2s ease-in-out`;
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

export const automaticalSlideChange = () => {
    const changeCarouselContent = () => {
        quote.innerText = DUMMY_DATA[counter].quote;
        author.innerText = `${DUMMY_DATA[counter].author}, ${DUMMY_DATA[counter].jobTitle}`;
        classRemover();
        setTimeout(() => {
            imageSlide();
        }, 2200);
        carouselCircles[counter].classList.add('active');
        counter++;
        if (counter === DUMMY_DATA.length) {
            counter = 0;
        }
    };

    let timer = setInterval(changeCarouselContent, 2200);
};
