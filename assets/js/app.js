



$('.aboutSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    navText :['<i class="fa-solid fa-left-long fa-1x"></i>','<i class="fa-solid fa-right-long fa-1x"></i>'],
    responsive:{
        0:{
            items:1,
            nav: false,
            dots: false
        },
        600:{
            items:2,
            nav: false,
        },
        1000:{
            items:3
        }
    }
})
