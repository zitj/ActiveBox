const quote = document.querySelector('q');
const author = document.querySelector('.author');
const carouselImg = document.getElementById('carouselImg');

const bubblesContainer = document.querySelector('.bubbles');
const bubbles = document.getElementsByClassName('bubble');

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
    div.classList.add('bubble');
    bubblesContainer.appendChild(div);
});

bubbles[0].classList.add('active');

const classRemover = () => {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].classList.remove('active');
    }
};

document.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('bubble') &&
        !event.target.classList.contains('active')
    ) {
        classRemover();
        event.target.classList.add('active');
        for (let i = 0; i < bubbles.length; i++) {
            if (bubbles[i].classList.contains('active')) {
                quote.innerText = DUMMY_DATA[i].quote;
                author.innerText = `${DUMMY_DATA[i].author}, ${DUMMY_DATA[i].jobTitle}`;
                carouselImg.src = `${DUMMY_DATA[i].img}`;
            }
        }
    }
});
