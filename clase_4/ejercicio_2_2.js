const parte1 = require('./ejercicio_2_1');

console.log("process.argv", process.argv);
let myArgv = process.argv.slice(2);
const n1 = Number(myArgv[0]);

if (parte1.verifica(n1) === true){
    console.log('Tiene tres digitos');
} else{
    console.log('No tiene tres digitos');
}
