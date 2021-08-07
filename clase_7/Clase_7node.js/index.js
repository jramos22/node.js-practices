const arreglofrutas = require('./frutas');

console.log("process.argv", process.argv);
let myArgv = process.argv.slice(2);
const nuevaFruta = String(myArgv[0]).toLocaleLowerCase();
let arrayfrutas = arreglofrutas.frutas();
let frutaAllada = false;
for (let i = 0; i < arrayfrutas.length; i++) {
    if (nuevaFruta == arrayfrutas[i].toLocaleLowerCase()) {
        frutaAllada = true;
    }
}
if (frutaAllada == true) {
    console.log("La fruta ya se encuentra en el arreglo");
} else {
    console.log("La fruta no se encuentra en el arreglo");
}
