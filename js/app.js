$(document).ready(function() {
    //owl-carousel
    $(".owl-carousel").owlCarousel();

    //side menu
    // $(".home").click(() => {
    //     $(".home").toggleClass("open");
    //     $(".side-dropdown").toggleClass("open");
    // });

    //open menu
    $("#hamburger").click(() => {
        $("#header2").toggleClass("slide");

    })


});
//owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    },

});

//side menu

const sidemenu = document.querySelectorAll(".menu-side li div");
sidemenu.forEach(menus => {
    menus.addEventListener("click", () => {
        menus.classList.toggle("active");
        const dropdown = menus.nextElementSibling;
        if (menus.classList.contains("active")) {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        } else {
            dropdown.style.maxHeight = 0;
        }
    })
});


//for header scroll
$(window).scroll(function() {
    $("#header").toggleClass("scrolled", $(this).scrollTop() > 100);
    $("#scrollup").toggleClass("animate", $(this).scrollTop() > 100);

});