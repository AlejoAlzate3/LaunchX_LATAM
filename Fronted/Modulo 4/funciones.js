const cuadrado = function(x){
    return x * x;
};

let numero = 4;
console.log(cuadrado(numero));


const ruido = function(){
    console.log("Kataplum");
}
ruido();


const exponencial = function(base, exponente){
    let resultado = 1;
    for(let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial(4, 3));


console.log(sumar(5, 65));
function sumar(a, b){
    return a + b;
}


const restar = (a, b) => {
    return a - b;
}
console.log(restar(40, 8));


function saludar(quien){
    console.log(`Hola ${quien}`);
}
saludar("Explorer");


//Excepciones
function preguntaDireccion(pregunta){
    let result = prompt(pregunta);
    if(result.toLowerCase() == "izquierda") return "I";
    if(result.toLowerCase() == "derecha") return "D";
    throw new Error("Direccion incorrecta: " + result);
}

function mirar(){
    if(preguntaDireccion("¿A que lado?") == "I"){
        return "Una casa";
    }
    else{
        return "2 osos hambrientos";
    }
}

try{
    console.log("Mira a ", mirar());
}catch(error){
    console.log("Hubo un Error: ", error);
}

// Asincrono
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => (resolve(console.log("Done!")), reject(new Error("Oops"))),
            2000
        )
    );

async function main(){
    promesa()
        .then(()=> {
            promesa()
                .then(()=> console.log("Hola"))
                .catch(error => console.log("Error: ", error));
        })
        .catch(error => console.log("Error: ", error));

    await promesa();
    console.log("Aqui termina la primer promesa");
    await promesa();
    console.log("Aqui termina la segunda promesa");
}

main();