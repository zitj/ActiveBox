import {
    quote,
    author,
    carouselImg,
    carouselCirclesContainer,
    carouselCircles,
} from './vars.js';
import { DUMMY_DATA } from '../data/dummy_data.js';

let counter = 0;
let interuptor = false;

carouselImg.classList.add('fadeIn');

quote.innerText = DUMMY_DATA[0].quote;
author.innerText = `${DUMMY_DATA[0].author}, ${DUMMY_DATA[0].jobTitle}`;
carouselImg.src = `${DUMMY_DATA[0].img}`;

DUMMY_DATA.forEach((element) => {
    let div = document.createElement('div');
    div.classList.add('carouselCircle');
    div.classList.add('noSelect');
    carouselCirclesContainer.appendChild(div);
});

carouselCircles[0].classList.add('active');

const classRemover = () => {
    for (let i = 0; i < carouselCircles.length; i++) {
        carouselCircles[i].classList.remove('active');
    }

    if (interuptor) {
        setTimeout(() => {
            interuptor = false;
        }, 2000);
    } else {
        carouselImg.classList.remove('fadeIn');
    }
};

document.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('carouselCircle') &&
        !event.target.classList.contains('active')
    ) {
        interuptor = true;

        classRemover();

        event.target.classList.add('active');
        for (let i = 0; i < carouselCircles.length; i++) {
            if (carouselCircles[i].classList.contains('active')) {
                quote.innerText = DUMMY_DATA[i].quote;
                author.innerText = `${DUMMY_DATA[i].author}, ${DUMMY_DATA[i].jobTitle}`;
                carouselImg.src = `${DUMMY_DATA[i].img}`;
                counter = i;
            }
        }
    }
});

export const automaticalSlideChange = () => {
    const changeCarouselContent = () => {
        quote.innerText = DUMMY_DATA[counter].quote;
        author.innerText = `${DUMMY_DATA[counter].author}, ${DUMMY_DATA[counter].jobTitle}`;
        carouselImg.src = `${DUMMY_DATA[counter].img}`;
        classRemover();

        setTimeout(() => {
            carouselImg.classList.add('fadeIn');
        }, 2000);

        carouselCircles[counter].classList.add('active');
        counter++;
        if (counter === DUMMY_DATA.length) {
            counter = 0;
        }
    };
    const complete = () => {
        clearInterval(timer);
        timer = null;
    };

    let timer = setInterval(changeCarouselContent, 2000);
};

// automaticalSlideChange();
