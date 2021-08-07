console.log("process.argv", process.argv);
let myArgv = process.argv.slice(2);
const n1 = Number(myArgv[0]);

function resultado(num) {
        let suma = num * ( num + 1 ) / 2;
        return suma;
}

console.log(resultado(n1));