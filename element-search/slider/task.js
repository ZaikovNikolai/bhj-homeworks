const left = document.getElementsByClassName('slider__arrow_prev')[0];
const right = document.getElementsByClassName('slider__arrow_next')[0];
const slides = Array.from(document.querySelectorAll('.slider__item'));
let item = 0;

left.onclick = () => {    
    slides[item].classList.remove('slider__item_active');
    item--;
    if (item < 0) {
        item = slides.length - 1;
    }
    slides[item].classList.add('slider__item_active');

}

right.onclick = () => {
    slides[item].classList.remove('slider__item_active');
    item++;
    if (item >= slides.length) {
        item = 0;
    }
    slides[item].classList.add('slider__item_active');
  
}