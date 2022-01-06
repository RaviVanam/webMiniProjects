const sliderContainer = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide'); 
const upButton = document.querySelector('.arrow-up');
const downButton = document.querySelector('.arrow-down');

// ---------------testing-------------------
const createNewSlide = function(slide) {
    slideLeft.innerHTML = `<div style="background-color: ${slide.slideColor};">\
                                <h1 style="color: ${slide.nameColor};">${slide.name}</h1>\
                                    <div class="quote">\
                                        <p>${slide.quote}</p>\
                                    </div>\
                                </div>`
                            + slideLeft.innerHTML;

    slideRight.innerHTML = slideRight.innerHTML 
                            + `<div style="background-image: url(${slide.imageURL});"></div>`;
}
                        
const slidesLength = slides.length;
for (let i = 0; i < slidesLength; i++) {
    createNewSlide(slides[i]);
}

// ----------------working -----------------

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

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}