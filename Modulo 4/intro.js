console.log("\n *********** Variables *********** \n");
var numer1= 4;
let numer2= 6;
const numer3= 0;
console.log("Numero 1: " + numer1 + " Numero 2: " + numer2 + " Numero 3: " + numer3);

console.log("\n *********** Cadenas *********** \n");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;
console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("\n *********** Condicionales *********** \n");
console.log(numer1 != numer2);
console.log(numer1 == numer2);

console.log("\n *********** Operador logico AND *********** \n");
console.log(numer1 != numer2 && numer1 == numer3);

console.log("\n *********** Operador logico OR *********** \n");
console.log(numer1 != numer2 || numer1 == numer3);

console.log("\n *********** Arreglos *********** \n");
let listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

listaDeNumeros.pop();
console.log(listaDeNumeros);

let listaDePalabras = ["Hola", "Mundo", "Cruel", "de", "JavaScript"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra.length);
console.log(palabra[3]);

console.log("\n *********** Objetos *********** \n");

let explorer = {
    nombre: "Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "Frontend Developer",
    proyectos: ["Abogabot", "Taqueria", "Pasteleria", "Vacunacion"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio",
        cuantos: 3
    },
};
console.log(explorer);
console.log(explorer.nombre);
console.log(explorer.proPer.cuantos);

/* Flujo Condicionales */
let number1 = 2;
let number2 = 6;
console.log("\n *********** if / else *********** \n");
if(number1 > number2 && number2){
    console.log("El numero 1 es mayor que numero 2");
}
else if(number1 == number2){
    console.log("Los numeros son iguales");
}
else{
    console.log("El numero 2 es mayor que numero 1");
}

/* Ciclo condicional*/
console.log("\n *********** Ciclo While *********** \n");
let numberWhile = 5;
while(numberWhile <= 12){
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}

console.log("\n *********** Ciclo Do While *********** \n");
let numberDoWhile = 12;
do{
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
}while(numberDoWhile <= 20);

console.log("\n *********** Ciclo For *********** \n");
let numeroFor = 0;
for(numeroFor; numeroFor <= 12; numeroFor++){
    console.log(numeroFor);
}

console.log("\n *********** Ciclo Switch *********** \n");
switch(prompt("¿Como esta el clima?")){
    case "lluvioso":
        console.log("Lleve paraguas");
        break;
    case "soleado":
        console.log("Lleve sombrero");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No se como esta el clima");
        break;
}