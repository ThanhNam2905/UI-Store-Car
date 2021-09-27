
// Menu bars
let menuBars = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let loginBtn = document.querySelector("#btn-login");
let loginForm = document.querySelector(".login-form-container");
let btnCloseLoginForm = document.querySelector("#btn-close-form");
let btnscrollTop = document.querySelector(".scroll-top i");
let loadingPage = document.querySelector("#loading-page");

menuBars.onclick = () => {
    document.querySelector('#menu-bar i').classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// Login Form
loginBtn.onclick = () => {
    loginForm.classList.add("active");
}
btnCloseLoginForm.onclick = () => {
    loginForm.classList.remove("active");
}

// Home Parallax.
document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".home-parallax").forEach(elem => {
        let speed = elem.getAttribute("data-speed");

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}
document.querySelector(".home").onmouseleave = () => {
    document.querySelectorAll(".home-parallax").forEach(elem => {
        elem.style.transform = `translateX(0px) translateY(0px)`;
    })
}

// Scroll To Top 
btnscrollTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// Loading Page
function loading() {
    loadingPage.classList.add("active");
}
function fadeOut() {
    setInterval(loading, 2800);
}
window.onload = fadeOut();



window.onscroll = () => {
    document.querySelector('#menu-bar i').classList.remove("fa-times");
    navbar.classList.remove("active");

    if (scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    }
    else {
        document.querySelector(".header").classList.remove("active");
    }

    if(scrollY > 300) {
        btnscrollTop.classList.add("active");
    }
    else {
        btnscrollTop.classList.remove("active");
    }
}


// SwiperJS
var swiper = new Swiper(".vehicles-slider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".features-sliders", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-sliders", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});