$(".img-carousel").owlCarousel({
    margin: 15,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navText: ["<b><i class='bi bi-arrow-left'></i></b>", "<b><i class='bi bi-arrow-right'></i></b>"],
    responsive: {
        0: {
            items: 1,
            // marge: true,
        },
        600: { items: 1.5 },
        900: {
            items: 2.5,
            marge: true,
        }
    },
});

