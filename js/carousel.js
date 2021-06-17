const quote = document.querySelector('q');
const author = document.querySelector('.author');
const carouselImg = document.getElementById('carouselImg');

const carouselCirclesContainer = document.querySelector('.carouselCircles');
const carouselCircles = document.getElementsByClassName('carouselCircle');

let counter = 0;

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
};

document.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('carouselCircle') &&
        !event.target.classList.contains('active')
    ) {
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
    const changeCarouselContent = () => {
        quote.innerText = DUMMY_DATA[counter].quote;
        author.innerText = `${DUMMY_DATA[counter].author}, ${DUMMY_DATA[0].jobTitle}`;
        carouselImg.src = `${DUMMY_DATA[counter].img}`;
        classRemover();
        carouselCircles[counter].classList.add('active');
        counter++;
        if (counter === DUMMY_DATA.length) {
            counter = 0;
        }
    };

    let timer = setInterval(changeCarouselContent, 4000);
};

automaticalSlideChange();
