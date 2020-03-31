$('.owl-carousel').owlCarousel({
    stagePadding: -350,
    loop: true,
    margin: 1,
    nav: true,
    mouseDrag: false,
    freeDrag: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})