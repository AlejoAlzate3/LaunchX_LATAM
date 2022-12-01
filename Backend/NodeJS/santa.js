//Con promise
function leerCarta(carta){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carta.split("").reverse().join(""));
        }, 2000);
    });
}

function construirJuguete(instruccion){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const juguete = instruccion.split("").reverse().join("");
            if(juguete.includes("madera"))
                return resolve(`${juguete} de madera fina`);
            else if(juguete.includes("xbox"))
                return resolve(`No te puedo enviar tu ${juguete}`);
            else
                return resolve(`Aqui tienes tu ${juguete} `);
        }, 5000)
    });
}

function envolverRegalo(juguete){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${juguete} envuelto`);
        }, 3000);
    });
}

leerCarta("xbox Series X")
    .then((instruccion) => {
        return construirJuguete(instruccion);
    })
    .then((juguete) => {
        return envolverRegalo(juguete);
    })
    .then((regalo) => {
        console.log(regalo);
    })

//Callback Hell
// leerCarta("carrito de madera", (instruccion) => {
//     construirJuguete(instruccion, (juguete) => {
//         envolverRegalo(juguete, (regalo) => {
//             console.log(regalo);
//         });
//     });
// });

//Modularizar las llamadas
// function construirC(juguete){
//     envolverRegalo(juguete, console.log);
// }

// function leerC(instruccion){
//     construirJuguete(instruccion, construirC);
// }

// leerCarta("carrito de madera", leerC);