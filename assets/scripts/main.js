$(document).ready(function () {
   
    var show_mini_header = document.getElementById("show_mini_header");
    var cloes_mini_header = document.getElementById("cloes_mini_header");
    var mini_header = document.getElementById("mini_header");
    show_mini_header.addEventListener("click",function () {
       mini_header.style.display = "flex";
       document.body.style.overflow = "hidden"; 
    });
    cloes_mini_header.addEventListener("click",function () {
       mini_header.style.display = "none";
       document.body.style.overflow = "auto"; 
    });

    $(window).resize(function () {
        if (window.innerWidth > 1024) {
            mini_header.style.display = "none";
            document.body.style.overflow = "auto"; 
        }
    });
    AOS.init();
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 60,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
            dynamicBullets: true,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });

});