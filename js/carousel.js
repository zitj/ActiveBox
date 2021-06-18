const quote = document.querySelector('q');
const author = document.querySelector('.author');
const carouselImg = document.getElementById('carouselImg');
const carouselElements = [quote, author, carouselImg];

const hamburger = document.getElementById('hamburger');
const backToTop = document.getElementById('backToTop');
const navigation = document.querySelector('ul');

const carouselCirclesContainer = document.querySelector('.carouselCircles');
const carouselCircles = document.getElementsByClassName('carouselCircle');

let counter = 0;
let interuptor = false;

const DUMMY_DATA = [
    {
        img: 'img/carousel/carousel-2.jpg',
        quote: 'Nesto tamo nesto',
        author: 'Aleksandar Veljkovic',
        jobTitle: 'Frontend developer',
    },
    {
        img: 'img/carousel/carousel-1.jpg',
        quote: 'Sibi imperare maximum imperium est',
        author: 'Ciceron',
        jobTitle: 'Philosopher',
    },
    {
        img: 'img/carousel/carousel-3.jpg',
        quote: 'Ko rano rani, dve srece grabi!',
        author: 'Narodna izreka',
        jobTitle: 'Narod',
    },
];

carouselImg.classList.add('fadeIn');

quote.innerText = DUMMY_DATA[0].quote;
author.innerText = `${DUMMY_DATA[0].author}, ${DUMMY_DATA[0].jobTitle}`;
carouselImg.src = `${DUMMY_DATA[0].img}`;

DUMMY_DATA.forEach((element) => {
    let div = document.createElement('div');
    div.classList.add('carouselCircle');
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

const automaticalSlideChange = () => {
    console.log(interuptor);
    const changeCarouselContent = () => {
        quote.innerText = DUMMY_DATA[counter].quote;
        author.innerText = `${DUMMY_DATA[counter].author}, ${DUMMY_DATA[counter].jobTitle}`;
        carouselImg.src = `${DUMMY_DATA[counter].img}`;
        classRemover();
        console.log(interuptor);

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
// automaticalSlideChange();
