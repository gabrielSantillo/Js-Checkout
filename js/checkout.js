let chosen_color = Cookies.get(`chosen_color`);
document.body[`style`][`backgroundColor`] = `${chosen_color}`

if(chosen_color === undefined) {
    let link = document.querySelector(`a`);
    link.insertAdjacentHTML(`afterend`, `<h1>Chose a color</h1>`)
}

function deleteSelection(details) {
    Cookies.remove(`chosen_color`);
}

let delete_color = document.querySelector(`button`);
delete_color.addEventListener(`click`, deleteSelection);