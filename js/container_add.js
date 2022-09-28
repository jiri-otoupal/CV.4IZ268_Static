var cooldowned = true;
var current_i = 0;
var current_margin = 25;
const favList = ["Software Developer", "Martial Arts lover", "Motorcyclist", "Adrenaline addict",
    "Entrepreneur", "Casual violinist", "Automation maniac"]

function reset() {
    if (current_i < favList.length)
        return

    current_i = 0;
    current_margin = 25;
    const fvlist = document.getElementById("fav-list");
    const list = document.getElementById('fav-list');
    while (list.children.length > 1) {
        list.removeChild(list.lastChild);
    }

    fvlist.style.marginTop = current_margin + "%";
}

setInterval(function () {
    reset()
}, 10000);

addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && cooldowned) {
        add_fav();
        cooldowned = false;
        setTimeout(function () {
            cooldowned = true;
        }, 1000);
    }
});

function add_fav() {
    if (current_i >= favList.length)
        return

    const list = document.getElementById('fav-list');
    const newLI = document.createElement('p');
    newLI.innerHTML = favList[current_i++];
    list.appendChild(newLI);
    setTimeout(function () {
        newLI.className = newLI.className + " fav show";
    }, 10);
    const fvlist = document.getElementById("fav-list");
    current_margin -= 3;

    fvlist.style.marginTop = current_margin + "%";

}
