class Animales{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    canta(){
        return `${this.nombre} puede cantar`;
    }

    correr(){
        return `${this.nombre} puede correr`;
    }
}

class Gatos extends Animales{
    constructor(nombre, edad, colorBigotes){
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }

    bigotes(){
        return `Tengo bigotes de color ${this.colorBigotes}`;
    }

    anios(){
        return `Tengo ${this.edad} años`;
    }
}

let animal = new Animales("Firulais", 3);
let gato = new Gatos("Garfield", 5, "Amarillo");
