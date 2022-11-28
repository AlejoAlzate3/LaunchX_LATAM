let nombres = {
    nombre: "Juan",
    apellido: "Perez"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));
console.log(nombres);

function Perro(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Perro.prototype.ladrar = function() {
    console.log("Guau Guau");
}

let firulais = new Perro("Firulais", 3);
console.log(firulais.ladrar());