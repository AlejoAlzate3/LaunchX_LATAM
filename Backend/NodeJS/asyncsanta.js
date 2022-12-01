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

// Path: Backend\NodeJS-2\index.js
(async function main() {
    const instruccion = await leerCarta("xbox Series X");
    const juguete = await construirJuguete(instruccion);
    const regalo = await envolverRegalo(juguete);
    console.log(regalo);
})();