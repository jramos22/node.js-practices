const llama = require('./opciones');
console.log("process.argv", process.argv);
let myArgv = process.argv.slice(2);
const operaciones =(myArgv[0]);
const num1 = Number(myArgv[1]);
const num2 = Number(myArgv[2]);



console.log(llama.opciones(operaciones, num1, num2));