
// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menu2 = document.querySelector('.header__nav-item');
let menuLinks = menu.querySelectorAll('.header__nav-link');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    menu2.classList.toggle('nav__item--active');
    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        menu2.classList.remove('nav__item--active');
        document.body.classList.remove('stop-scroll');
    });
});

// ether

document.querySelector('.header__nav__btn-320').addEventListener('click', function () {
    document.querySelector('.header__nav__btn-320').classList.toggle('header__nav__btn-320--active')
    document.querySelector('.header__nav-play').classList.toggle('header__nav-play--active')
});

// inpit

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal"
});

// podcasts play=pause

const buttons = document.querySelectorAll('.player__btn');

for (let button of buttons) {
  button.addEventListener("click", e => {
    let activeBtn = document.querySelector('button.pause')
    if (activeBtn && activeBtn !== e.target) {
      activeBtn.classList.remove('pause')
    };
    button.classList.toggle('pause');
  });
};
// ---
document.querySelector('.podcasts__btn-item').addEventListener('click', function () {
    var elements = document.getElementsByClassName('podcasts__col');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("podcasts__col--visible");
    }
});

document.querySelector('.podcasts__btn-open').addEventListener('click', function () {
    document.querySelector('.podcasts__btn-open').classList.toggle('podcasts__btn-open--hidden')
});

// Choices

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    classNames: {
        containerOuter: 'choices header_choices'
    }
});

// ac

new Accordion('.accordion-container');

// tabs

document.querySelectorAll('.ac__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.ac__btn').forEach(function(btn){
        btn.classList.remove('ac__btn--active')});
        e.currentTarget.classList.add('ac__btn--active');
    
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')
    });
});

// swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    direction: 'horizontal',
    navigation: {
        prevEl: '.swiper-left.swiper-button-prev',
        nextEl: '.swiper-right.swiper-button-next',
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    }
});

// Validate

new JustValidate('.js-form', {
    tooltip: {
        fadeOutTime: 5000
    },
    messages: {
        comment: 'Ошибка',
        name: 'Ошибка',
        email: {
          required: 'Ошибка',
          email: 'Вы ввели не корректный e-mail!'
        }
    },
    rules: {
        comment: {
        minLength: 5,
        maxLength: 300  
        },
        name: {
          required: true,
          minLength: 3,
          maxLength: 20
        },
        mail: {
          required: true,
          email: true
        },
        checkbox: {
            required: true
        }
    }
});


// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href') 
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    })
};