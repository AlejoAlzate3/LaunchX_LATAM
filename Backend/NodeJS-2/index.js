//Proceso Asincrono de NodeJS
http = require('http');

console.log("1. Hola");
http.get('http://httpstat.us/200', (resp) => {
    console.log(`2. La api devolvio:  ${resp.statusCode}`);
});
console.log("3. Adios");