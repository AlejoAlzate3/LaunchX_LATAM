//Polimorfismo

function Persona(nombre){
    this.nombre = nombre;
    this.caminar = function(){
        console.log("Estoy caminando");
    }
}

function Alumno(nombre, sangre){
    Persona.call(this, nombre);
    this.sangre = sangre;
    this.caminar = function(){
        console.log("Estoy corriendo");
    }
}

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno;

let estudiante1 = new Alumno("Juan", "O+");
let persona1 = new Persona("Pedro");

console.log(estudiante1.caminar());
console.log(persona1.caminar());