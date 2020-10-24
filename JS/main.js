//Mobile Nav
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');
    const bdy = document.querySelector('body');

    //Nav Toggle
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        bdy.classList.toggle('bod-active');

        //Animation
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .3}s`
            }
        });
        //Buger Animation
        burger.classList.toggle('toggle');
    });

    if (window.screen.width < 851) {

        nav.addEventListener('click', () => {

            nav.classList.toggle('nav-active');
            bdy.classList.toggle('bod-active');

            //Animation
            navLink.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .3}s`
                }
            });
            //Buger Animation
            burger.classList.toggle('toggle');


        });
    }

}

//Night more
const nightMode = () => {
    const entirePage = document.querySelector('html');

    var date = new Date();
    var current_hour = date.getHours();

    if ((current_hour >= 6) && (current_hour <= 19)) {
        entirePage.classList.toggle('pg-uninvert');
    } else {
        entirePage.classList.toggle('pg-invert');
    }
}

//Up Button
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Functions
navSlide();
nightMode();
