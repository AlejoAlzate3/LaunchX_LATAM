const parrafoInicial = document.getElementById("parrafoInicial");

parrafoInicial.onclick = function() {
    cambiaColorAleatorio();
}

function cambiaColorAleatorio() {

    const colores = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "black", "white"];

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}