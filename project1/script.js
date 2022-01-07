let load = 0;
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

function mouseOver() {
    loadText.style.color = "red";
}

function mouseOut() {
    loadText.style.color = "white";
}

function onClick() {
    let interval = setInterval(() => {
        load++;
    
        loadText.innerHTML = `${load}%`;
        loadText.style.opacity = (100 - load)/100;
        bg.style.filter = `blur(${(30 * ((100 - load) / 100))}px)`
    
        if (load > 99) {
            clearInterval(interval);
            loadText.innerHTML = "TADA!";
            loadText.style.fontSize = "100px";
            loadText.style.opacity = 1;
        }
    }, 10);
}
