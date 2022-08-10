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




var swiper = new Swiper('.myArticle', {
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
            slidesPerView: 3,
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


// chart js

var xValues = [, 1398 + "/" + 4 + "/" + 5, 1398 + "/" + 4 + "/" + 5, 1398 + "/" + 4 + "/" + 5, 1398 + "/" + 4 +
            "/" + 5, 1398 + "/" + 4 + "/" + 5, 1398 + "/" + 4 + "/" + 5, 1398 + "/" + 4 + "/" + 5, 1398 + "/" + 4 +
            "/" + 5, 1398 + "/" + 4 + "/" + 5
        ];

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    data: [5550, 5660, 5500, 5700, 5900, 5600],
                    borderColor: "#ffa1a2",
                    borderWidth:3,
                    fill: false
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 5500,
                            max: 5900,
                            stepSize: 100
                        }
                    }],
                }
            }
        });
