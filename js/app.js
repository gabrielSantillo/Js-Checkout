function toRed(details) {
    Cookies.set(`chosen_color`, `red`);
}

let red = document.getElementById(`button_red`);
red.addEventListener(`click`, toRed);

function toPurple(details) {
    Cookies.set(`chosen_color`, `purple`);
}

let purple = document.getElementById(`button_purple`);
purple.addEventListener(`click`, toPurple);

function toBlue(details) {
    Cookies.set(`chosen_color`, `blue`);
}

let blue = document.getElementById(`button_blue`);
blue.addEventListener(`click`, toBlue);

let color = Cookies.get(`chosen_color`);

