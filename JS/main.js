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

navSlide();


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


