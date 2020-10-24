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

nightMode();
