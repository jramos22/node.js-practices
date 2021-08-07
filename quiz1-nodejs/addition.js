// mayor
function max(numeros) {
    return Math.max.apply(null,numeros);
}

// menor
function min(numeros) {
    return Math.min.apply(null, numeros);
}

//suma todo

function sumAll(numeros) {
    let sum = 0;

    for (let i = 0; i < numeros.length; i++) {
        sum += Number(numeros[i]);
    }
    return sum;
}
// re ordena de menor a mayor
function newOrder(numeros) {

    numeros.sort(function(a,b) {
        return a -b ;
    });
    return console.log(numeros);
}

// exporta la este archivo donde es llamado por app.js
exports.funcion = function (todo) {
    console.log(max(todo));
    console.log(min(todo));
    console.log(sumAll(todo));
    console.log(newOrder(todo));
}