let user = detect.parse(navigator.userAgent);
//Night more
//FIX IT FOR FIREFOX & HEADER COLOR
const nightMode = () => {
    const entirePage = document.querySelector('html');

    console.log(user.browser.family);

    var date = new Date();
    var current_hour = date.getHours();

    if (!((user.browser.family === 'Firefox') || (user.browser.family === 'Firefox Mobile'))) {
        if ((current_hour >= 6) && (current_hour < 19)) {
            entirePage.classList.toggle('pg-uninvert');
        } else {
            entirePage.classList.toggle('pg-invert');
        }
    }
}


//Scrolling
mybutton = document.getElementById("myBtn");
let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
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

// nightMode(); //Nightmode type beat
