setInterval(function () {
    scanInViewport()
}, 100);

function scanInViewport() {
    let className = "container";
    const watched = document.getElementsByClassName(className);

    for (let i = 0; i < watched.length; i++) {
        const item = watched[i];
        if (elementInViewport(item)) {
            item.className = className + " fadec.show";
        } else {
            item.className = className + " fadec";
        }
    }


}

function elementInViewport(watched) {
    const bounding = watched.getBoundingClientRect();

    return bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight + 1 || document.documentElement.clientHeight);

}
