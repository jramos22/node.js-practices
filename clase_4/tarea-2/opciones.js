exports.opciones = function (operaciones, num1, num2) {
    if (operaciones === 'suma') {
        let suma1 = num1 + num2;
        return suma1;
    } else if (operaciones === 'divi') {
        if (num1 === 0 || num2 === 0) {
            return 'Error';
        } else {
            let divi1 = num1 / num2;
            return divi1;
        } 
    } else if (operaciones === 'multi') {
        let multi1 = num1 * num2;
        return multi1;
    } else if (operaciones === 'resta') {
        let resta1 = num1 - num2;
        return resta1;
    }
}