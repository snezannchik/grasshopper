let swiper = new Swiper(".mySwiper", {
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev'
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    // slidesPerView: 4,
    spaceBeetwen: 0,
    loop: true,
    speed: 800,
    autoplay:{
        delay: 1500,  
        // pauseOnMouseEnter: false
    },
    
    breakpoints:{
        321:{
            slidesPerView: 2,
        },
        769:{
            slidesPerView: 3,
        },
        1025:{
            slidesPerView: 4,
        },
    }
    //    1200:{
    //      slidesPerView: 3,
    //    },

    //    1440:{
    //      slidesPerView: 4,
    //    },
    //    1920:{
    //      slidesPerView: 4,
    //    }
    // }
});

window.addEventListener('resize', function () {
    // Обновление Swiper в реальном времени при изменении размера окна
    swiper.update();
});