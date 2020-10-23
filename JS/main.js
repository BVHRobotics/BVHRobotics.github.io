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


}

navSlide();
