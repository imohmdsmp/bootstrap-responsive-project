var swiper = new Swiper('.mySwiper', {
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3.4,
            spaceBetween: 10,
        },
    }
});



// camercial js
var swiper = new Swiper('.myCammercial', {
    spaceBetween: 90,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 6,
        },
    }
});