$(".img-carousel").owlCarousel({
    margin: 15,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navText: ["<b>⟵</b>", "<b>⟶</b>"],
    responsive: {
        0: { items: 1.5 },
        600: { items: 2.5 },
        900: {
            items: 2.5,
            marge: true,
        }
    },
});