let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Welcome = document.querySelector('.welcome');
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    Welcome.style.fontSize = value + 'px';
    if (scrollY >= 50) {
        Welcome.style.fontSize = 50 + 'px';
        Welcome.style.position = 'fixed';
        if (scrollY >= 436) {
            Welcome.style.display = 'none';

        } else {
            Welcome.style.display = 'block';
        }
        if (scrollY >= 141) {
            document.querySelector('.photos').style.background = 'linear-gradient(#73c7ee,#4a3079)'
        } else {
            document.querySelector('.photos').style.background = 'linear-gradient(#310288,#040211)'
        }
    }
}
