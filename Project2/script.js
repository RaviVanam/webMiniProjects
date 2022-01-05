const sliderContainer = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide'); 
const upButton = document.querySelector('.arrow-up');
const downButton = document.querySelector('.arrow-down'); 
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = direction => {
    const sliderHeight = sliderContainer.clientHeight;
    
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.top = `-${(activeSlideIndex) * 100}vh`;
    slideLeft.style.top = `${(- ((slidesLength - 1) * 100) + (activeSlideIndex) * 100)}vh`;
}