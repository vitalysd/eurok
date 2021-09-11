//swiper
import { Swiper, Parallax, Mousewheel, Controller, Navigation, Pagination } from 'swiper';

Swiper.use([ Parallax, Mousewheel, Controller, Navigation, Pagination ]);

const introSlider = new Swiper('.intro-slider', {
    speed: 2400,
    parallax: true,
    pagination: {
        el: '.intro-slider-counter .total',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if (total < 10) {
                return `0${total}`;
            } else {
                return total;
            }
        }
    }
});

const introTextSlider = new Swiper('.intro-text-slider', {
    speed: 2400,
    parallax: true,
    mousewheel: {
        invert: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

//Counter
let curnum = document.querySelector('.intro-slider-counter .current');

introTextSlider.on('slideChange', function () {
    let index = introTextSlider.realIndex + 1;

    if (index < 10) {
        curnum.innerHTML = `0${index}`; 
    } else {
        curnum.innerHTML = index; 
    }
});


introSlider.controller.control = introTextSlider;
introTextSlider.controller.control = introSlider;

//burger-menu
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.header__menu-list');
const navLink = document.querySelectorAll('.header__menu-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

function linkAction(){
    burger.classList.toggle('open');
    navMenu.classList.remove('open');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

