//Encontrar elementos en HTML
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");

//Cambiar valores de HTML
titulo.innerHTML = "Hola Mundo";

document.getElementById("demo").innerHTML = "The next in first paragraph is: " + parrafo[0].innerHTML;

links[0].href = "https://www.google.com";
links[0].target = "_blank";

//Cambiar estilos de HTML

titulo.style.color = "red";

//Eventos
function cambiarTexto(obj){
    obj.innerHTML = "Texto clickeado";
}

function mOver(obj){
    obj.innerHTML = "Mouse Over";
}

function mOut(obj){
    obj.innerHTML = "Mouse Out";
}

function mDown(obj){
    obj.style.backgroundColor = "red";
    obj.innerHTML = "Mouse Down";
}

function mUp(obj){
    obj.style.backgroundColor = "yellow";
    obj.innerHTML = "Thanks";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta);

function alerta(){
    alert("Hola Mundo");
}