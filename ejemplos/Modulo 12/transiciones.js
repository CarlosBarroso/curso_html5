

function evento(e) {
    alert("evento finalizado");
}

document.getElementById("div1").addEventListener("transitionend", evento, true);